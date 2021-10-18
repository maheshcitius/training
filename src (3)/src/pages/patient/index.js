import { Box , Container, Typography } from '@mui/material';

import Page from '../../shared/Page';
import {
  Outlet
} from 'react-router-dom';
import HomeLayout from '../../shared/HomeLayout';

export const PatientDashboard = () => {
  return (
    <>
         
        <HomeLayout>
           
            <h3>Patient Dashboard</h3>
            <Outlet />

        </HomeLayout>
          
         
                
    </>
    
  )
};
