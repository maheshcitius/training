import React, {  useEffect } from 'react';

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { userActions } from '../../actions'
import { useHistory } from "react-router-dom";
import { RegistrationForm } from '../../shared/RegistrationForm'

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

export default function Register() {
  let history = useHistory();
  useEffect(() => {
      // Redirect to dashboard
       if(localStorage.getItem('user')){

          history.push("/admin");
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
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Registration
          </Typography>     
             <RegistrationForm submit={handleSubmit}></RegistrationForm>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}