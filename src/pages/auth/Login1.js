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
import { userActions } from '../../actions'
import { useHistory } from "react-router-dom";
import CommonInputFieldsForLoginAndForgotPasswprd from'./CommonInputFieldsForLoginAndForgotPasswprd';
import React,{  useEffect }  from 'react';

const Login1=({firstBX,secBX,title})=>{
    let history = useHistory();
    useEffect(() => {
        
         if(localStorage.getItem('user')){
            history.push("/");
         }
        
      });

    const dispatch = useDispatch();
    const { userLogin } = bindActionCreators(userActions, dispatch);
     
    console.log("{ userLogin }",{ userLogin });
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            Username: data.get('Username'),
            Password: data.get('Password'),
        });
    
        userLogin({
            username: data.get('Username'),
            password: data.get('Password'),
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
            <Box component="form"  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <CommonInputFieldsForLoginAndForgotPasswprd firstBX={firstBX} secBX={secBX} title={title}/>
                <Button variant="contained"  type="submit" fullWidth>Submit</Button>
            </Box>
              &nbsp;
              <Typography><Link href={'/ForgotPassword'} >Forgot Password</Link></Typography>
              <hr></hr>
              <Typography variant="caption" display="block"  style={{color: 'blue', marginBottom: 12,textAlign: 'center',}} gutterBottom>I am New here</Typography>
              <Button variant="outlined" fullWidth>Create Account</Button>
          </Paper>
      </Grid>
    )
}

export default Login1;
