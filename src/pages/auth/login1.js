import React, {  useEffect } from 'react';
import { Avatar, Grid , Button , Paper } from '@mui/material';

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
import { useNavigate } from "react-router-dom";
import { LoginForm1 } from '../../shared/LoginForm1'

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

export default function Login1() {

  const navigate = useNavigate();
   useEffect(() => {
        // Redirect to dashboard
         if(localStorage.getItem('user')){

          let user = JSON.parse(localStorage.getItem('user')).user;
          console.log("login role" , user)

         
          navigate(`/${user.role}/`)

        }
         
         
        
      });

    const dispatch = useDispatch();
    const { userLogin } = bindActionCreators(userActions, dispatch);

  const handleSubmit = (values) => {
   
    userLogin({
        username: values.email,
        password: values.password,
      })
  };

  return (
  <Grid>
    <Paper elevation={10} style={{
    padding: 20,
    width: 320,
    height: '80vh',
    margin: '20px auto',
}}>
     <Grid align="center">
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign in
        </Typography>   
        {/* <Box component="form"  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <CommonInputFieldsForLoginAndForgotPasswprd firstBX={firstBX} secBX={secBX} title={title}/>
            <Button variant="contained"  type="submit" fullWidth>Submit</Button>
        </Box> */}
        <LoginForm1 submit={handleSubmit}></LoginForm1>

        &nbsp;
        <Typography><Link href={'/EmailVerificationForForgotPW'} >Forgot Password</Link></Typography>
        <hr></hr>
        <Typography variant="caption" display="block"  style={{color: 'blue', marginBottom: 12,}} gutterBottom>I am New here</Typography>
        <Button variant="outlined" fullWidth>Create Account</Button>
      </Grid>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Paper>
</Grid>
  );

}