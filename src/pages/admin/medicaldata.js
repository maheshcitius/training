import { Stack , Card ,Container, Typography ,Button } from '@mui/material';
import React , {useState} from 'react';
// components
import Page from '../../components/Page';
import PageHeader from '../../shared/PageHeader';
import { MedicalDataGrid } from '../../components'
import MedicationIcon from '@mui/icons-material/Medication';


export const  AdminMedicalData = () => {


    

    return (
        <Page title="Admin / Medical Data">
           <PageHeader 
                title="Medical Data"
                subTitle="Allergies and Medications"
                icon={<MedicationIcon fontSize="large" />}
            />

          <Container>
         
       

          <MedicalDataGrid />

         

          </Container>
        </Page>
  )
    

};
