import React, {  useEffect } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { userActions } from '../../actions'
import { useHistory } from "react-router-dom";
import { Form } from '../../shared/Form'
import {loginFormTemplate} from '../../templates/index'
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
export const LoginComponent = () => {

    let template = {
        title: 'Login For Patient Portal',
        fields: [
           
            {
                title: 'Email',
                type: 'email',
                name: 'email',
                validationProps: {
                    required: 'Email is mandatory'
                }
            },
            {
                title: 'Password',
                type: 'password',
                name: 'password',
                validationProps: {
                    required: 'Password is mandatory'
                }
            }
        ]
    }

    let history = useHistory();
    useEffect(() => {
        // Redirect to dashboard
         if(localStorage.getItem('user')){
            history.push("/");
         }
        
      });

    const dispatch = useDispatch();
    const { userLogin } = bindActionCreators(userActions, dispatch);


  const handleSubmit = (event) => {
     event.preventDefault();

    console.log("event",event)
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    userLogin({
        username: data.get('email'),
        password: data.get('password'),
      })
  };

  const onSubmit = data => {
   console.log("in component",data)
  };

function validate(watchValues, errorMethods) {
  

     
}

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
            Sign in
          </Typography>

         

          <Form
            template={template}
            validate={validate}
            onSubmit={handleSubmit}
           />
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}