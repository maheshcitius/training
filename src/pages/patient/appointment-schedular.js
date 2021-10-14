import { Box , Container, Typography } from '@mui/material';

import Page from '../../shared/Page';


export const PatientScheduleAppointments = () => {
    return (
        <Page title="Patient | Appointments">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5 }}>
            <Typography variant="h4">Hi, Welcome to Patient Appointment Schedular </Typography>
          </Box>
          </Container>
          </Page>
  )
    

};
