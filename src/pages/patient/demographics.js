import { Box , Container, Typography } from '@mui/material';

import Page from '../../shared/Page';


export const PatientDemographics = () => {
    return (
        <Page title="Patient | Dashboard">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5 }}>
            <Typography variant="h4">Hi, Welcome to Patient Demographics</Typography>
          </Box>
          </Container>
          </Page>
  )
    

};
