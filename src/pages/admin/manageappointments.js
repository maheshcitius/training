
import { Box , Container, Typography , Tab } from '@mui/material';
import EventSchedular from '../../shared/events'
import React, {  useEffect  } from 'react';
import {useSelector } from 'react-redux'
import { appointmentServices } from '../../services';
import Page from '../../shared/Page';
import { TabContext , TabList ,TabPanel } from '@mui/lab'
import { AppointmentTbl } from '../../components/Admin/Appointments/appointmentTbl';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
//import { appointmentsActions } from '../../actions';
import {appointmentsActions} from '../../redux-store/actions'
import PageHeader from '../../shared/PageHeader';
import ScheduleIcon from '@mui/icons-material/Schedule';

export const  AdminManageAppointments =()=> {

  const [value, setValue] = React.useState('1');

   let  appointments = useSelector((state) => state.appointments);

   let  all = useSelector((state) => state.allUsers);
console.log("Appointments",appointments)
   
   const dispatch = useDispatch();
   const { getAppointments } = bindActionCreators(appointmentsActions, dispatch);




  const handleChange = (event, newValue) => {
    setValue(newValue);
    };

  useEffect(() => {
   // getAppointments()
   },[])

   console.log("Appointments page" , appointments)
   console.log("Appointments page all usrs" , all)

   

    return (
        <Page title="Patient | Appointments">
          {/* <PageHeader 
                title="Appointments"
                subTitle="Manage Patient Appointments"
                icon={<ScheduleIcon fontSize="large" />}
            /> */}

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
           <EventSchedular data ={appointments}/>
    </TabPanel>
  </TabContext>
</Box>
          
          </Container>  
          </Page>
             )
    

};
