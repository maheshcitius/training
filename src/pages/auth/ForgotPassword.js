import { Avatar, Grid } from '@material-ui/core';
import { Paper } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { userActions } from '../../actions';
import { useHistory } from "react-router-dom";
import  { ForgotPWForm }  from '../../shared/ForgotPWForm';
import { useNavigate, NavLink } from "react-router-dom";

import React,{  useEffect }  from 'react';

const ForgotPassword=()=>{
    // let history = useHistory();
    const navigate = useNavigate();
    useEffect(() => {
      // Redirect to dashboard
      if(localStorage.getItem('PWChanged')){
          // history.push("/login");
          navigate(`/login`)
      }
      
    });

    const dispatch = useDispatch();
    const { setNewPassword } = bindActionCreators(userActions, dispatch);
    const userVerified =localStorage.getItem('userVerified');
    const userVerified1=JSON.parse(userVerified)[0].id;
    const email=JSON.parse(userVerified)[0].email;


    const handleSubmit = (values) => {
      setNewPassword({
            newPassword: values.password,
            oldPassword: values.reEnterPassword,
            userVerified: userVerified1,
            email:email,
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
            {/* <Box component="form" onSubmit={handleForgotPasswordSubmit} noValidate sx={{ mt: 1 }}>
              <CommonInputFieldsForLoginAndForgotPasswprd firstBX={firstBX} secBX={secBX} title={title}/>
              <Button variant="contained" type="submit" fullWidth>Submit</Button>
            </Box> */}
                 <Grid align="center">
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <AccountCircleOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                       Reset Password
                    </Typography>   
                    <ForgotPWForm submit={handleSubmit}/>
                </Grid>
            &nbsp;
            <hr></hr>
          </Paper>
      </Grid>
    )
}

export default ForgotPassword;