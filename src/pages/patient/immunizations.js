import { Box , Container, Typography } from '@mui/material';

import Page from '../../shared/Page';


export const PatientImmunizations = () => {
    return (
        <Page title="Patient | Immunizations">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5,pt:5 }}>
            <Typography variant="h4">Hi, Welcome to Patient Immunizations</Typography>
          </Box>
          </Container>
          </Page>
  )
    

};
