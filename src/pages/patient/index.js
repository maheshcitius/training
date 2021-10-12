import { Box , Container, Typography } from '@mui/material';

import Page from '../../shared/Page';


export const PatientDashboard = () => {
  return (
      <Page title="Patient | Dashboard">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5 }}>
            <Typography variant="h4">Hi, Welcome to Patient Dashboard</Typography>
          </Box>
        </Container>          
      </Page>
    )
};
