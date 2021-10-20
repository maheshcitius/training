
import { Box , Container, Typography , Tab } from '@mui/material';
import EventSchedular from '../../shared/events'
import React, {  useEffect  } from 'react';
import {useSelector } from 'react-redux'
import { appointmentServices } from '../../services';
import Page from '../../shared/Page';
import { TabContext , TabList ,TabPanel } from '@mui/lab'
import { AppointmentTbl } from '../../components';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { appointmentsActions } from '../../actions';

export const  AdminManageAppointments =()=> {

  const [value, setValue] = React.useState('1');

   let  appointments = useSelector((state) => state.appointments);

   const dispatch = useDispatch();
   const { getAppointments } = bindActionCreators(appointmentsActions, dispatch);


  const handleChange = (event, newValue) => {
    setValue(newValue);
    };

  useEffect(() => {
    getAppointments()
   },[])

    return (
        <Page title="Patient | Appointments">
        <Container maxWidth="xl">
            
        <Box sx={{ width: '100%', typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
       
        <Tab label="Table" value="1" />
        <Tab label="Calender" value="2" />
      </TabList>
    </Box>
   
    <TabPanel value="1">
         <AppointmentTbl data={appointments} /> 
    </TabPanel>
    <TabPanel value="2">
    <EventSchedular />
    </TabPanel>
  </TabContext>
</Box>
          
          </Container>  
          </Page>
             )
    

};
