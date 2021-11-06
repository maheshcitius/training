import { useState, useEffect } from "react";
import Page from "../../shared/Page";
import { Link as RouterLink } from "react-router-dom";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Icon } from "@iconify/react";
import Dialogue from "../../shared/dialogue";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { FormDialogsAction } from "../../actions";
import Scrollbar from "../../components/Scrollbar";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { physiciansActions } from "../../actions"; //--
import { userActions, patientsAction } from "../../actions";
import { fill, filter } from "lodash";
import Switch from "@mui/material/Switch";
import ManagePatientForm from "../admin/ManagePatientForm";
import PageHeader from "../../shared/PageHeader";
import { ManagePatientUpdateForm } from "../../shared/ManagePatientUpdateForm";
import { ManagePatientView } from "../../shared/ManagePatientView";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Label from "../../components/Label";
import SearchNotFound from "../../components/SearchNotFound";
import {
  UserListHead,
  UserListToolbar,
  UserMoreMenu,
} from "../../components/_dashboard/user";
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Box,
  Alert,
  ListItemIcon,
} from "@mui/material";
import trash2Outline from "@iconify/icons-eva/trash-2-outline";
import editFill from "@iconify/icons-eva/edit-fill";
import eyeFill from "@iconify/icons-eva/eye-fill";
import { closeFormDialog } from "../../actions/FormDialogs-action";
import { openFormDialog } from "../../actions/FormDialogs-action";
import Modal from "@mui/material/Modal";
import { physiciansService } from "../../services";
import { patientService } from "../../services";

export const AdminManagePatients = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    userName: "",
    email: "",
    role: "patient",
    mobileNumber: "",
    password: "",
    createdOn: "",
    createdBy: "",
  };
  const [USERLIST, setUSERLIST] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("firstName");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const handleOpenModel = () => setOpenModel(true);
  const handleCloseModel = () => setOpenModel(false);
  const [checked, setChecked] = useState("");
  const [formData, setFormData] = useState(initialValue);

  const TABLE_HEAD = [
    { id: "name", label: "Name", alignRight: false },
    { id: "company", label: "Email", alignRight: false },
    { id: "dateOfBirth", label: "Date Of Birth", alignRight: false },
    { id: "mobileNumber", label: "Mobile Number", alignRight: false },
    { id: "Action", label: "Action" },
  ];

  const dispatch = useDispatch();
  const { getAllPatients } = bindActionCreators(patientsAction, dispatch);
  const { getPatientDemographicsDetails } = bindActionCreators(
    patientsAction,
    dispatch
  );
  const { getPatientImmunizationDetails } = bindActionCreators(
    patientsAction,
    dispatch
  );
  const { updateUser } = bindActionCreators(userActions, dispatch);
  const physicians = useSelector((state) => state.authentication.currentUser);
  const { FlagActionPatient } = useSelector(
    (state) => state.FormDialogsReducer
  );

  const patient = useSelector((state) => state);
  console.log("patient --- state", patient);

  const getAllPatientFunction = () => {
    patientService.getAllPatients().then((data) => {
      if (data) {
        console.log("inside useeffect----", data);
        setUSERLIST(data);
      }
    });
  };

  useEffect(() => {
    //   console.log(" { getAllPatients }", getAllPatients() );
    getAllPatientFunction();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    console.log("inside selected");
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.firstName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredUsers = applySortFilter(
    USERLIST,
    getComparator(order, orderBy),
    filterName
  );
  const isUserNotFound = filteredUsers.length === 0;
  function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(
        array,
        (_user) => _user.email.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => descendingComparator(a, b, orderBy);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const { updatePhysicianById } = bindActionCreators(
    physiciansActions,
    dispatch
  );
  const handleView = (params) => {
    console.log("handleView", params);
    setFormData(params);
    getPatientDemographicsDetails(params.id);
    getPatientImmunizationDetails(params.id);
    handleClickOpenView();
  };

  const { openFormDialog } = bindActionCreators(FormDialogsAction, dispatch);

  // const { userRegistration } = bindActionCreators(userActions, dispatch);

  // to show registration URL
  const [regUrl, setUrl] = useState(null);
  const [newRegFlag, setRegFlag] = useState(null);

  const handleSubmit = ({ email, firstName, lastName }) => {
    const Url = `http://localhost:3000/register?email=${email}+&firstName=${firstName}&lastName=${lastName}&role=physician`;
    setUrl(Url);
  };

  const handlerClose = (a) => {
    setUrl(a);
  };

  const handlerRegFlag = (a) => {
    setRegFlag(a);
  };

  const handleDelete = (values) => {
    console.log("insidedelete--", values);
    const confirm = window.confirm(
      `Are you sure, you want to delete this Physician  ${values.firstName}`
    );
    if (confirm) {
      const { deletePatientById } = bindActionCreators(
        patientsAction,
        dispatch
      );
      deletePatientById(values.id);
    }
  };

  const handleUpdate = (oldData) => {
    console.log("get the old data", oldData);
    setFormData(oldData);
    handleClickOpenUpdateForm();
  };

  const handleClickOpen = () => {
    console.log("dilogue is opened");
    openFormDialog({
      title: "Patient Registration",
      subtitle: "Add new",
      FlagActionPatient: "add",
    });
  };

  const handleClickOpenUpdateForm = () => {
    console.log("dilogue is opened");
    openFormDialog({
      title: "Update Patient",
      subtitle: "Details",
      FlagActionPatient: "edit",
    });
  };

  const handleClickOpenView = () => {
    console.log("dilogue is opened");
    openFormDialog({
      title: "Patient",
      subtitle: "Details",
      FlagActionPatient: "view",
    });
  };

  const handleUpSubmit = (values) => {
    let userId = values.id;
    let payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      dateOfBirth: values.dateOfBirth,
      userName: values.userName,
      email: values.email,
      mobileNumber: values.mobileNumber,
    };
    console.log("----------payload-----------", payload);
    updateUser(userId, payload);
    // getAllPatientFunction();
    dispatch(closeFormDialog());
    window.location.reload();
  };

  return (
    <Page title="Patient | Appointments">
      <PageHeader
        title="Patients"
        subTitle="Manage Patients"
        icon={<ScheduleIcon fontSize="large" />}
      />
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
            onClick={handleClickOpen}
          >
            Invite patient
          </Button>

          <Dialogue regUrl={regUrl} handlerClose={handlerClose}>
            {FlagActionPatient == "add" ? (
              <ManagePatientForm submit={handleSubmit} />
            ) : FlagActionPatient == "edit" ? (
              <ManagePatientUpdateForm
                data={formData}
                handleUpSubmit={handleUpSubmit}
              />
            ) : (
              <ManagePatientView data={formData} />
            )}
          </Dialogue>
        </Stack>
        <UserListToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />
        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={USERLIST.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    console.log("row--", row);
                    const {
                      id,
                      gender,
                      dateOfBirth,
                      role,
                      email,
                      firstname,
                      mobileNumber,
                      lastname,
                      specialization,
                      experience,
                      isActive,
                    } = row;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox">
                        <TableCell component="th" scope="row" padding="none">
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                          >
                            {/* <Avatar alt={name} src={avatarUrl} /> */}
                            <Typography variant="subtitle2" noWrap>
                              {firstname}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{email}</TableCell>
                        <TableCell align="left">{dateOfBirth}</TableCell>
                        <TableCell align="left">{mobileNumber}</TableCell>
                        <TableCell>
                          <Button onClick={() => handleDelete(row)}>
                            <Icon icon={trash2Outline} />
                          </Button>
                          <Button onClick={() => handleUpdate(row)}>
                            <Icon icon={editFill} />
                          </Button>
                          <Button onClick={() => handleView(row)}>
                            <Icon icon={eyeFill} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
              {isUserNotFound && (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                      <SearchNotFound searchQuery={filterName} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Scrollbar>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={USERLIST.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>
    </Page>
  );
};
