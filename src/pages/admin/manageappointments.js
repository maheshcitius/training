
import { Box , Container, Typography } from '@mui/material';
import EventSchedular from '../../shared/events'
import React, {  useEffect } from 'react';
import { appointmentServices } from '../../services';
import Page from '../../shared/Page';

export const  AdminManageAppointments =()=> {


  useEffect(() => {
    appointmentServices.getAllAppointments()
   })

    return (
        <Page title="Patient | Appointments">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5 }}>
            <Typography variant="h4">Admin Appointments</Typography>
          </Box>
          <Box sl={{ pt: 3 }}>
          <EventSchedular />
          </Box>
          </Container>  
          </Page>
             )
    

};
