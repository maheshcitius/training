import React, { Children, useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { filter } from "lodash";
import { Icon } from "@iconify/react";
import { sentenceCase } from "change-case";
import plusFill from "@iconify/icons-eva/plus-fill";
import { NavLink as RouterLink, Outlet, useNavigate } from "react-router-dom";
import Chip from "@mui/material/Chip";

import AppointmentListHead from "./AppointmentListHead";
import AppointmentListToolbar from "./AppointmentListToolbar";
import AppointmentMoreMenu from "./AppointmentMoreMenu";

import Label from "../../../components/Label";
import Scrollbar from "../../../components/Scrollbar";
import SearchNotFound from "../../../components/SearchNotFound";
import { appointmentsActions } from "../../../redux-store/actions";
import { useDispatch, useSelector } from "react-redux";
import ConfirmPopup from "../../../shared/ConfirmPopup";
import Popup from "../../../shared/Popup";
import { UpdateAppointmentForm } from "../../../shared/UpdateAppointmentForm";

// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { SelectSearch } from "../../../shared/SelectSearch";

const TABLE_HEAD = [
  { id: "title", label: "Title", alignRight: false },
  { id: "physicianName", label: "Physician", alignRight: false },
  { id: "visitType", label: "Visit Type", alignRight: false },
  { id: "scheduleDate", label: "Scheduled Date", alignRight: false },
  { id: "scheduleTime", label: "Time", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "" },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

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
      (_user) => _user.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export const AppointmentTbl = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [appointmentss, setAppointments] = useState(props.data.appointments);
  const [physicians, setPhysicians] = useState([]);

  const users = useSelector((state) => state.allUsers);
  console.log("users", users);

  // useEffect(() => {
  //   var phy = [];

  //   if (users.physicians?.length > 0) {
  //     phy = users.physicians.map((user) => {
  //       let temp;
  //       if (user.role === "physician") {
  //         temp.label = user.firstname;
  //         temp.value = user.id;
  //       }
  //       return temp;
  //     });
  //     setPhysicians(phy);
  //   }
  // }, [users.physicians]);

  useEffect(() => {
    setAppointments(props.data.appointments);
  }, [props.data.appointments]);

  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openEditPopup, setEditPopup] = useState(false);
  const [openChangePhyPopup, setopenChangePhyPopup] = useState(false);

  const [item, setItem] = useState(null);

  const changePhysician = (item) => {
    setItem(item);
    setopenChangePhyPopup(true);
  };

  const handlePhysicanChange = (values) => {
    let payload = {
      physicianName: values?.key?.label,
      physicianId: values.key?.value,
    };
    console.log("in phy change", payload);

    dispatch(appointmentsActions.updateAppointment(item.id, payload));
    setopenChangePhyPopup(false);
  };
  const editAppointment = (values) => {
    console.log("edit appointment values", values);
    let payload = {
      title: values?.title,
      scheduleDate: values?.scheduleDate,
      description: values?.description,
      status: values?.status,
    };

    dispatch(appointmentsActions.updateAppointment(item.id, payload));
    setEditPopup(false);
  };

  const handleEdit = (item) => {
    setItem(item);
    setEditPopup(true);
  };
  const handlePopupClose = (val) => {
    setEditPopup(val);
    setopenChangePhyPopup(val);
  };
  const deleteHandler = (item) => {
    console.log("in delete handle", item);
    setItem(item);
    setOpenConfirm(true);
  };
  const handleConfirm = (open, isConfirm) => {
    if (isConfirm) {
      dispatch(appointmentsActions.deleteAppointment(item.id));
    }
    setOpenConfirm(open);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = appointmentss.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - appointmentss?.length)
      : 0;

  const appointments =
    appointmentss?.length > 0
      ? applySortFilter(
          appointmentss,
          getComparator(order, orderBy),
          filterName
        )
      : [];

  const isUserNotFound = appointments?.length === 0;

  const showDetail = (row) => {
    navigate(`${row.id}`);
  };
  console.log(appointments.length,"appointments length")

  console.log("physicians", physicians);

  return (
    <>
      <Card>
        <ConfirmPopup
          title="Confirm"
          subtile="Do you want to delete the Apoointment ?"
          openConfirmPopup={openConfirm}
          setConfirmOpenPopup={handleConfirm}
        ></ConfirmPopup>

        <Popup
          title="Edit Appointment"
          openPopup={openEditPopup}
          setOpenPopup={handlePopupClose}
        >
          {/* <UpdateAppointmentForm savedValues={item} submit={editAppointment} /> */}
          <UpdateAppointmentForm savedValues={item} submit={editAppointment} />
        </Popup>

        <Popup
          title="Change Physician"
          openPopup={openChangePhyPopup}
          setOpenPopup={handlePopupClose}
        >
          <SelectSearch key="physician" submit={handlePhysicanChange} />
        </Popup>

        <AppointmentListToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <AppointmentListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={appointments.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              {appointments.length > 0 && (
                <TableBody>
                  {appointments
                    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const {
                        id,
                        title,
                        physicianName,
                        visitType,
                        scheduleDate,
                        scheduleTime,
                        status,
                      } = row;
                      const isItemSelected = selected.indexOf(title) !== -1;

                      return (
                        <TableRow
                          hover
                          key={id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          {/* <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, title)}
                            />
                          </TableCell> */}
                          <TableCell align="left">{id}</TableCell>

                          <TableCell
                            component="th"
                            scope="row"
                            padding="none"
                            onClick={() => showDetail(row)}
                          >
                            {title}
                          </TableCell>
                          <TableCell align="left">{physicianName}</TableCell>
                          <TableCell align="left">{visitType}</TableCell>
                          <TableCell align="left">{scheduleDate}</TableCell>
                          <TableCell align="left">
                            {/* <Label
                              variant="ghost"
                              color={(status === 'banned' && 'error') || 'success'}
                            >
                              {sentenceCase(status)}
                            </Label> */}
                            {scheduleTime}
                          </TableCell>
                          <TableCell align="left">
                            <Chip variant="outlined" label={status} />
                          </TableCell>

                          <TableCell align="right">
                            <AppointmentMoreMenu
                              item={row}
                              handleDelete={deleteHandler}
                              handleEdit={handleEdit}
                              handleChangePhysician={changePhysician}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              )}
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
          count={appointments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </>
  );
};
