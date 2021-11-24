import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { immunizationActions } from "../../redux-store/actions";
import ImmunizationForm from "../../shared/ImmunizationForm";
import { date } from "yup/lib/locale";
import { makeStyles } from "@mui/styles";
import { DataGrid, useGridSlotComponentProps } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import { userInformation } from "../../services";
import Page from "../../components/Page";
import PageHeader from "../../shared/PageHeader";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Icon } from "@iconify/react";
import Popup from "../../shared/Popup";

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
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  Alert,
  ListItemIcon,
} from "@mui/material";
import trash2Outline from "@iconify/icons-eva/trash-2-outline";
import editFill from "@iconify/icons-eva/edit-fill";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

function CustomPagination() {
  const { state, apiRef } = useGridSlotComponentProps();
  const classes = useStyles();

  return (
    <Pagination
      className={classes.root}
      color="primary"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export const PatientImmunizations = (props) => {
  const [open, setOpen] = useState(false);

  const [openEditPopup, setEditPopup] = useState(false);

  const dispatch = useDispatch();
  const user = userInformation.getCurrentUser();
  console.log(user?.user?.id);

  const UserInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  let patientImmunization = useSelector((state) => state.immunization);

  console.log("immunizations ", patientImmunization);

  const [immArr, setimmArr] = useState([]);
  const { postImmunization, deleteImminization } = bindActionCreators(
    immunizationActions,
    dispatch
  );
  // const { getAll } = bindActionCreators(immunizationActions, dispatch);

  // useEffect(() => {
  //   getAll();
  // }, []);
  let rows = [];
  useEffect(() => {
    setimmArr(patientImmunization?.immunization);
    // if (UserInfo?.immunization?.immunization) {

    //   //formatTableRows(immArr, rows);
    // }}
  }, [patientImmunization?.immunization]);

  const handleSubmit = (values) => {
    console.log(values);
    const payload = {
      patientId: UserInfo?.user?.id,
      vaccineType: values.vaccineType,
      vaccineName: values.vaccineName,
      noOfDoses: values.noOfDoses,
      vaccinatedOn: values.vaccinatedOn,
      createdBy: UserInfo?.user?.id,
      createdOn: new Date(),
      updatedBy: UserInfo?.user?.id,
      updatedOn: new Date(),
    };
    console.log(payload);

    postImmunization(payload);
    setOpen(false);
    //getAll();
    // setimmArr(immArr.push(payload));
    // console.log(immArr);
  };
  console.log(patientImmunization);

  const columns = [
    {
      field: "vaccinatedOn",
      headerName: "Date",
      type: "date",
      width: 150,
    },
    {
      field: "vaccineType",
      headerName: "Vaccine Type",
      type: "string",
      width: 150,
    },
    {
      field: "vaccineName",
      headerName: "Vaccine Name",
      type: "string",
      width: 150,
    },
    {
      field: "noOfDoses",
      headerName: "Dosage Number",
      type: "string",
      width: 150,
    },
  ];

  if (immArr) {
    for (let item of immArr) {
      rows.push({
        id: item.id,
        dateAdded: item.createdOn,
        vaccinatedOn: item.vaccinatedOn,
        vaccineType: item.vaccineType,
        vaccineName: item.vaccineName,
        dosageNumber: item.noOfDoses,
      });
    }
  }

  const TABLE_HEAD = [
    { id: "vaccineType", label: "vaccine Type", alignRight: false },
    { id: "vaccineName", label: "vaccine Name", alignRight: false },
    { id: "noOfDoses", label: "noOfDoses", alignRight: false },
    { id: "vaccinatedOn", label: "vaccinated On", alignRight: false },
    { id: "Action", label: "Action" },
  ];
  const openPopup = () => {
    setOpen(true);
  };
  const handlePopupClose = () => {
    setOpen(false);
  };
  const handleDelete = (row) => {
    debugger;
    deleteImminization(row.id);
    console.log("in handle delete");
  };
  return (
    <Page title="Patient  | Immunizations">
      <PageHeader
        title="Immunizations"
        subTitle="My Immunizations"
        icon={<AccountBoxIcon fontSize="large" />}
      />

      <Popup
        title="Add Immunization"
        openPopup={open}
        setOpenPopup={handlePopupClose}
      >
        <ImmunizationForm submit={handleSubmit} />
      </Popup>

      <Box
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <Button
            variant="contained"
            startIcon={<Icon icon={plusFill} />}
            onClick={() => openPopup(true)}
            sx={{
              marginTop: 0,
              marginBottom: 4,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              float: "right",
            }}
          >
            Add Immunization
          </Button>
        </div>
        <TableContainer>
          <Table>
            <TableHead className="bg-light">
              <TableRow>
                {TABLE_HEAD?.map((row) => {
                  return (
                    <TableCell key={row.id} align="left" component="th">
                      <strong> {row.label} </strong>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>

            {patientImmunization && (
              <TableBody>
                {patientImmunization?.immunization?.map((row) => {
                  return (
                    <TableRow hoer key={row.id}>
                      <TableCell align="left">{row.vaccineType}</TableCell>
                      <TableCell align="left">{row.vaccineName}</TableCell>
                      <TableCell align="left">{row.noOfDoses}</TableCell>

                      <TableCell align="left">{row.vaccinatedOn}</TableCell>
                      <TableCell align="left">
                        <Button onClick={() => handleDelete(row)}>
                          <Icon icon={trash2Outline} />
                        </Button>
                        {/* <Button onClick={() => handleEdit(row)}>
                          <Icon icon={editFill} />
                        </Button> */}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Box>
    </Page>
  );
};
