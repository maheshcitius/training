import React, {  useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useDispatch , useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { appointmentsActions } from '../../actions'
import {AppointmentForm} from '../../shared/AppointmentForm';
// import EventSchedular from '../../shared/events'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export const PatientScheduleAppointments = () => {
  const dispatch = useDispatch();
  // const {data} = useSelector((state) => state.demographics);
   
  const { addAppointment} = bindActionCreators(appointmentsActions, dispatch);

  const handleSubmit = (values) => {
    console.log(values,"form values");
      addAppointment({
        physicianName:values.physicianName,
        title: values.title,
        doa: values.doa,
        time:values.time
        })
      };
    return (
  <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
          <Typography component="h1" variant="h5">
          Hi, Welcome to Patient Appointment Schedular        
           </Typography>     
             <AppointmentForm submit={handleSubmit}/>
        </Box> 
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
    

};
