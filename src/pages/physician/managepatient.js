import { Box , Container, Typography } from '@mui/material';

import Page from '../../shared/Page';


export const PhysicianManagePatients = ()  =>        
 {

    return (
        <Page title="Physician | Appointments">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5 }}>
            <Typography variant="h4">Hi, Welcome to Physican manage Patients</Typography>
          </Box>
          </Container>
          </Page>
  )
    


 };