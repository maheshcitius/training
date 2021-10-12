import React, {  useEffect } from 'react';
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

export const PatientImmunization = (props) => {
  const dispatch = useDispatch();

  const UserInfo = useSelector((state) => state.authentication);
  const { postImmunization } = bindActionCreators(immunizationActions, dispatch);

  const handleSubmit = (values) => {

    postImmunization({
      patientID: UserInfo.user.user.id,
      vaccineType:values.vaccineType,
      vaccineName:values.vaccineName,
      noOfDoses:values.noOfDoses,
      vaccinatedOn:values.vaccinatedOn,
      createdBy: UserInfo.user.user.firstname+ " " + UserInfo.user.user.lastname,
      createdOn: new Date(),
      updatedBy:UserInfo.user.user.firstname+ " " + UserInfo.user.user.lastname,
      updatedOn:new Date(),
      isActive: true,
      })

  };

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
          <ImmunizationForm submit={handleSubmit}/>
        </Box>
    </ThemeProvider>
  
  );
};

