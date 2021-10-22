import React, {  Children, useEffect  } from 'react';

import Page from '../../../shared/Page';
import { Container } from '@mui/material';
import PageHeader from '../../../shared/PageHeader';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { Outlet } from 'react-router';

export const  AppointmentLayout =()=> {



    return (
        <Page title="Patient | Appointments">
          <PageHeader 
                title="Appointments"
                subTitle="Manage Patient Appointments"
                icon={<ScheduleIcon fontSize="large" />}
            />

        <Container maxWidth="xl">
            <Outlet/>
          
          </Container>  
          </Page>
             )
    

};
