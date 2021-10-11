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
import CommonInputFieldsForLoginAndForgotPasswprd from'./CommonInputFieldsForLoginAndForgotPasswprd';
import  { EmailVerificationFormForForgotPW }  from '../../shared/EmailVerificationFormForForgotPW';
import React,{  useEffect }  from 'react';


const ForgotPassword=()=>{

    let history = useHistory();
    useEffect(() => {
      // Redirect to dashboard
       if(localStorage.getItem('userVerified')){
          console.log("Pournima in side if of useeffect");
          history.push("/ForgotPassword");
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
            {/* <Box component="form" onSubmit={handleForgotPasswordSubmit} noValidate sx={{ mt: 1 }}>
              <CommonInputFieldsForLoginAndForgotPasswprd firstBX={firstBX} secBX={secBX} title={title}/>
              <Button variant="contained" type="submit" fullWidth>Submit</Button>
            </Box> */}
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

export default ForgotPassword;