import { Avatar, Grid } from '@material-ui/core';
import { Paper } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { userActions } from '../../actions';
import { useHistory } from "react-router-dom";
import  { LoginForm1 }  from '../../shared/LoginForm1';
// import { LoginForm } from '../../shared/LoginForm'


import CommonInputFieldsForLoginAndForgotPasswprd from'./CommonInputFieldsForLoginAndForgotPasswprd';
import React,{  useEffect }  from 'react';


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


const Login1=()=>{
    let history = useHistory();
    useEffect(() => {
      // Redirect to dashboard
       if(localStorage.getItem('user')){

          history.push("/admin");
       }
      
    });
    const dispatch = useDispatch();
    const { userLogin } = bindActionCreators(userActions, dispatch);
     
    console.log("{ userLogin }",{ userLogin });

    const handleSubmit = (values) => {
   
      userLogin({
          username: values.email,
          password: values.password,
        })
    };
    const paperStyle={
        padding: 20,
        width: 320,
        height: '80vh',
        margin: '20px auto',
    }
    return (
      <Grid>
          <Paper elevation={10} style={paperStyle}>
           <Grid align="center">
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <AccountCircleOutlinedIcon/>
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
              <Typography><Link href={'/EmailVerificationForForgotPW'} >Reset Password</Link></Typography>
              <hr></hr>
              <Typography variant="caption" display="block"  style={{color: 'blue', marginBottom: 12,}} gutterBottom>I am New here</Typography>
              <Button variant="outlined" fullWidth>Create Account</Button>
            </Grid>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Paper>
      </Grid>
    )
}

export default Login1;
