import { Box , Container, Typography } from '@mui/material';

import Page from '../../shared/Page';
import EventSchedular from '../../shared/events'


export const PatientScheduleAppointments = () => {
    return (
        <Page title="Patient | Appointments">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5 }}>
            <Typography variant="h4">Hi, Welcome to Patient Appointment Schedular </Typography>
          </Box>
          <EventSchedular />
          </Container>
          </Page>
  )
    

};
