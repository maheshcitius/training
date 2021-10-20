import { Stack , Card ,Container, Typography } from '@mui/material';
// components
import Page from '../../components/Page';

import { MedicalDataGrid } from '../../components'



export const  AdminMedicalData = () => {

    

    return (
        <Page title="Admin / Medical Data">
          <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Medical Data
          </Typography>
        
        </Stack>

          <MedicalDataGrid />

          </Container>
        </Page>
  )
    

};
