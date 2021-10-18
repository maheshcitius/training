import React, {  useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { immunizationActions } from '../../actions'
import  ImmunizationForm from '../../shared/ImmunizationForm'
import { date } from 'yup/lib/locale';
import { makeStyles } from '@mui/styles';
import { DataGrid, useGridSlotComponentProps } from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';

const useStyles = makeStyles({
  root: {
    display: 'flex',
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
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export const PatientImmunizations = (props) => {

  const dispatch = useDispatch();

  const UserInfo = useSelector((state) => state);
  const [immArr, setimmArr] = useState([]);
  const { postImmunization } = bindActionCreators(immunizationActions, dispatch);
  const { getAll } = bindActionCreators(immunizationActions, dispatch);
  console.log(UserInfo);
  useEffect(() => {
    getAll();
    setimmArr(UserInfo.immunization.immunization)
  }, [])
  console.log(immArr);
  

  const handleSubmit = (values) => {
    const payload={
      patientID: UserInfo.authentication.user.user.id,
      vaccineType:values.vaccineType,
      vaccineName:values.vaccineName,
      noOfDoses:values.noOfDoses,
      vaccinatedOn:values.vaccinatedOn,
      createdBy: UserInfo.authentication.user.user.firstname+ " " + UserInfo.authentication.user.user.lastname,
      createdOn: new Date(),
      updatedBy:UserInfo.authentication.user.user.firstname+ " " + UserInfo.authentication.user.user.lastname,
      updatedOn:new Date(),
      isActive: true,
      };
      console.log(payload);

    postImmunization(payload);
    // setimmArr(UserInfo.immunization.immunization);
    // console.log(immArr);

  };
  
  const columns = [
    {
      field: 'dateAdded',
      headerName: 'Date',
      type: 'date',
      width: 150,
    },
    {
      field: 'vaccinatedOn',
      headerName: 'Date',
      type: 'date',
      width: 150,
    },
    {
      field: 'vaccineType',
      headerName: 'Vaccine Type',
      type: 'string',
      width: 150,
    },
    {
      field: 'vaccineName',
      headerName: 'Vaccine Name',
      type: 'string',
      width: 150,
    },
    {
      field: 'dosageNumber',
      headerName: 'Dosage Number',
      type: 'string',
      width: 150,
    }
      ];
    
    const rows = [];
      for(let item of immArr){
        rows.push({
          id: item.id,
          dateAdded: item.createdOn,
          vaccinatedOn: item.vaccinatedOn,
          vaccineType: item.vaccineType,
          vaccineName: item.vaccineName,
          dosageNumber: item.noOfDoses
        })
      }


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: "100vh"
          }}
        >         
          <Typography component="h1" variant="h5">
           Patient Immunizations         
           </Typography>
          <ImmunizationForm handleSubmit={handleSubmit}/>
          <div style={{ height: 400, width: '50%' }}>
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
        </Box>
    </ThemeProvider>
  
  );
};
