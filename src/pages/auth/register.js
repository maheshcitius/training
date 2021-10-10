import React, {useState,  useEffect } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
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
    const [role, setRole] = useState([]);
    let history = useHistory();
    useEffect(() => {
        
         if(localStorage.getItem('user')){
            history.push("/");
         }
        
      });

    const dispatch = useDispatch();
    
    // const { userRegistration } = bindActionCreators(userActions, dispatch);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      
    });

    // userRegistration({
    //     username: data.get('email'),
    //     password: data.get('password'),
    //   })
  };
  
  const handleChangeRole = (event) => {
    setRole(event.target.value);
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
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField 
          id="FName"  
          margin="normal" 
          required 
          fullWidth 
          label="First Name"  
          />
          <TextField 
          id="FName"  
          margin="normal" 
          required 
          fullWidth 
          label="Last Name"  
          />
          <TextField  
          id="dob"   
          margin="normal" 
          required 
          fullWidth 
          label="Birthday" 
          type="date"  
                InputLabelProps={{
                shrink: true,
             }} 
            />
          <TextField 
          id="UserName" 
          name="value"  
          margin="normal" 
          required 
          fullWidth 
          label="User Name"  
          />
          <InputLabel id="labelrole">Role</InputLabel>
          <Select id="role" 
          margin="normal" labelId="labelrole"value={role} required fullWidth
           onChange={handleChangeRole}
          >
          <MenuItem value="">
            <em>Select Role</em>
          </MenuItem>
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>Physican</MenuItem>
          <MenuItem value={20}>Lab Assistant</MenuItem>
          <MenuItem value={30}>Patient</MenuItem>
        </Select>
            <TextField 
             margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField 
            id="mobileNumber"  
            margin="normal" 
            required 
            fullWidth 
            label="Mobile Number"  />
            
            <TextField
              margin="normal"    
              required
              fullWidth
              label="Password"
              type="password"
              id="password1"
              
            />
             <TextField
              margin="normal"
              required
              fullWidth
              label="Retype Password"
              type="password"
              id="password2"
             
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}