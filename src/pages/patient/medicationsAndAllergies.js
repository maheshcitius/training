import { Box , Container, Typography } from '@mui/material';

import Page from '../../shared/Page';


export const PatientMedicationsAndAllergies = () => {
    return (
        <Page title="Patient | Medications And Allergies">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5,pt:5 }}>
            <Typography variant="h4">Hi, Welcome to Patient Medications And Allergies</Typography>
          </Box>
          </Container>
          </Page>
  )
    

};
