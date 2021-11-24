import {
    Avatar,
    Grid,
    Card,
    CardActions,
    CardContent,
    Divider
  } from '@mui/material';
  import { Paper } from '@mui/material';
  import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
  import TextField from '@mui/material/TextField';
  import Link from '@mui/material/Link';
  import Button from '@mui/material/Button';
  import Box from '@mui/material/Box';
  import Typography from '@mui/material/Typography';
  import { useDispatch, useSelector } from "react-redux";
  import { bindActionCreators } from 'redux';
  import { userActions } from '../actions';
  import { useHistory } from "react-router-dom";
  import { useNavigate, NavLink } from "react-router-dom";
  import  { EmailVerificationFormForForgotPW }  from '../shared/EmailVerificationFormForForgotPW';
  import React,{  useEffect }  from 'react';
  
  
  export default function EmailVerificationForForgotPW(){
  
    const UserInfo = useSelector((state) => state.authentication);
      // let history = useHistory();
      const navigate = useNavigate();
      useEffect(() => {
        // Redirect to dashboard
         if(UserInfo?.verified){
            console.log("Pournima in side if of useeffect");
            // history.push("/ForgotPassword");
            navigate(`/ForgotPassword`);
            // localStorage.removeItem('userVerified');
         }
        
        
      });
  
      const dispatch = useDispatch();
      const { userEmailVerify } = bindActionCreators(userActions, dispatch);
  
      const handleSubmit = (values) => {
          userEmailVerify({
              verifyEmail: values.verifyEmail,
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
                          Email Verification
                      </Typography>   
                      <EmailVerificationFormForForgotPW submit={handleSubmit}/>
                  </Grid>
              &nbsp;
              <hr></hr>
            </Paper>
        </Grid>
      )
  }
  
  