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

  const dispatch = useDispatch();
  const user = userInformation.getCurrentUser();
  console.log(user?.user?.id)

  const UserInfo = (localStorage.getItem('user') )? JSON.parse(localStorage.getItem('user') ) : '';;
  let patientImmunization = useSelector((state) => state.immunization);
  const [immArr, setimmArr] = useState([]);
  const [userInfo, setUserInfo] = useState(UserInfo.user)
  const { postImmunization } = bindActionCreators(
    immunizationActions,
    dispatch
  );
  const { getAll } = bindActionCreators(immunizationActions, dispatch);
  let rows = [];
  console.log("User Info----",UserInfo);
  console.log("State User info----", userInfo);
  useEffect(() => {
    
    getAll();  
    setimmArr(patientImmunization.immunization);
    // if (UserInfo?.immunization?.immunization) {
      
    //   //formatTableRows(immArr, rows);
    // }}
    
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
    const payload = {
      patientID: UserInfo.user.id,
      vaccineType: values.vaccineType,
      vaccineName: values.vaccineName,
      noOfDoses: values.noOfDoses,
      vaccinatedOn: values.vaccinatedOn,
      createdBy:
        UserInfo.user.firstname +
        " " +
        UserInfo.user.lastname,
      createdOn: new Date(),
      updatedBy:
        UserInfo.user.firstname +
        " " +
        UserInfo.user.lastname,
      updatedOn: new Date(),
      isActive: true,
    };
    console.log(payload);

    postImmunization(payload);
    rows.push({});
    //getAll();
    // setimmArr(immArr.push(payload));
    // console.log(immArr);
  };
  console.log(patientImmunization);

  const columns = [
    {
      field: "dateAdded",
      headerName: "Date",
      type: "date",
      width: 150,
    },
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
      field: "dosageNumber",
      headerName: "Dosage Number",
      type: "string",
      width: 150,
    },
  ];

  const formatTableRows = (data, dataArray) => {
    for (let item of data) {
      dataArray.push({
        id: item.id,
        dateAdded: item.createdOn,
        vaccinatedOn: item.vaccinatedOn,
        vaccineType: item.vaccineType,
        vaccineName: item.vaccineName,
        dosageNumber: item.noOfDoses,
      });
    }
  };

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

  const ImmunizationsTable = () => {
    return (
      <div style={{ height: 400, width: "80%", marginTop: "20px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pagination
          pageSize={5}
          rowsPerPageOptions={[5]}
          components={{
            Pagination: CustomPagination,
          }}
        />
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography component="h1" variant="h5">
          Patient Immunizations
        </Typography>
        <ImmunizationForm submit={handleSubmit} />
        <ImmunizationsTable />
      </Box>
    </ThemeProvider>
  );
};
