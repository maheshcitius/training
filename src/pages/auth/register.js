import React, {  useEffect } from 'react';
import { Avatar, Grid , Button , Paper } from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { userActions } from '../../actions'
import { useNavigate, NavLink } from "react-router-dom";
import { RegistrationForm } from '../../shared/RegistrationForm'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <NavLink color="inherit" to="https://material-ui.com/">
        Your Website
      </NavLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  
  const navigate = useNavigate();
   useEffect(() => {
        // Redirect to dashboard
         if(localStorage.getItem('user')){

          let user = JSON.parse(localStorage.getItem('user')).user;
          console.log("login role" , user)

         
          navigate(`/${user.role}`)

        }
        
      });

  const dispatch = useDispatch();
  const { userRegistration } = bindActionCreators(userActions, dispatch);

const handleSubmit = (values) => {
 console.log(values);
  userRegistration({
    firstName:values.firstName,
    lastName:values.lastName,
    dateOfBirth:values.dob,
    userName: values.userName,
    email:values.email,
    role: values.role,
    mobileNumber: values.mobileNumber,
    password: values.password,
    createdOn: values.createdOn,
    createdBy: values.updatedOn
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid align="center">
       
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h5" variant="h5">
          Registration
          </Typography>     
             <RegistrationForm submit={handleSubmit}></RegistrationForm>
    
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}