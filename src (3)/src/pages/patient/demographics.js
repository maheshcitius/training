
import React, {  useEffect ,useSelector} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { demographicActions } from '../../actions'
import  {DemographicsForm} from '../../shared/DemographicsForm'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function PatientDemographics() {
  const dispatch = useDispatch();
  const { postDemographics} = bindActionCreators(demographicActions, dispatch);
  const {getAllDemographics}= bindActionCreators(demographicActions, dispatch);
  console.log(getAllDemographics,"demographics called");
  // const DemographicsData = useSelector((state) => state.demographicsReducer);
  // console.log(DemographicsData)
   
  

const handleSubmit = (values) => {
console.log(values,"form values");
  postDemographics({
    firstName: values.firstName,
    lastName:values.lastName,
    dob:values.dob,
    gender:values.demographics,
    ethinicity:values.ethinicity,
    education:values.education,
    employment:values.employment,
    address:values.address,
    phoneNumber:values.phoneNumber,
    medicalhistory:values.medicalhistory,
    familymedicalhistory:values.familymedicalhistory,
    surgeries:values.surgeries,
    insuranceprovider:values.insuranceprovider
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
          <Typography component="h1" variant="h5">
           Patient Demographics         
           </Typography>     
             <DemographicsForm submit={handleSubmit}/>
        </Box> 
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
