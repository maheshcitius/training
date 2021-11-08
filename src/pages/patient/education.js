import { Box , Container, Typography } from '@mui/material';

import Page from '../../shared/Page';


export const PatientEducation = () => {
    return (
        <Page title="Patient | Education">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5,pt:5 }}>
            <Typography variant="h4">Hi, Welcome to Patient Education</Typography>
          </Box>
         
          </Container>
          </Page>
  )
    

};
