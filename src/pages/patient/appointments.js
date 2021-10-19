import { Box , Container, Typography } from '@mui/material';

import Page from '../../shared/Page';


export const PatientAppointments = () => {
    return (
        <Page title="Patient | Appointments">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5 }}>
            <Typography variant="h4">Hi, Welcome to Patient Appointments</Typography>
          </Box>
          </Container>
          </Page>
  )
    

};
