
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {TextField,Box, Button ,IconButton } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from "react-redux";
import  {toggleSnackbarOpen}  from '../actions/snackbar-actions';
import  Snackbarr  from '../shared/Snackbar';

import {createdFields} from '../helpers/defaultfields';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
    firstName: yup
    .string('Enter your First Name')
    .min(4,'First Name should be of minimum 8 characters length')
    .required('First Name required'),
    lastName: yup
    .string('Enter your Last Name')
    .min(4,'Last Name should be of minimum 4 characters length')
    .required('Last Name required'),
    dob: yup
    .date('Enter your Birtday')
    .required('Birtday required'),
    userName: yup
    .string('Enter your User Name')
    .min(6,'User Name should be of minimum 6 characters length')
    .required('User Name required'),
    role: yup
    .string('Select the Role')
    .min(1,'please select Role')
    .required('Role is required'),
    mobileNumber: yup
    .number('Enter your Mobile Number')
    .min(10,'User Name should be of 10 characters length')
    .required('User Name required'),
    password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
    retypepassword: yup
    .string('Retype your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
});

export const RegistrationForm = (props) => {
const dispatch = useDispatch(); 
  let [showPassword, setShowPassword] = React.useState(false)
  
  let formSubmit = props.submit;
  const formik = useFormik({
    initialValues: {
      firstName:'',
      lastName:'',
      dob:'',
      userName: '',
      email: '',
      role: '',
      mobileNumber: '',
      password: '',
      retypepassword: '',
      createdOn: createdFields.createdOn,
      updatedOn: createdFields.updatedOn
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if(values.password != values.retypepassword){
        alert('enterd passords are not matching');
      }else{
        formSubmit(values)
      }
    },
  });
  const handleClickShowPassword = () => {
    setShowPassword(
      showPassword =!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      
      <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 5 }}>
      <TextField 
          id="firstName"  
          name="firstName"
          margin="normal" 
          required 
          fullWidth 
          label="First Name"  
          fullWidth
          autoFocus
          variant="standard"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField 
          id="lastName"  
          name="lastName"
          margin="normal" 
          required 
          fullWidth 
          label="Last Name"  
          fullWidth
          autoFocus
          variant="standard"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          />
        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          required
          label="Email"
          autoComplete="email"
          autoFocus
          variant="standard"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
       <TextField  
          fullWidth
          margin="normal"
          id="dob"
          name="dob"
          required
          label="Date of Birth"
          autoFocus
          variant="standard"
          type="date"  
                InputLabelProps={{
                shrink: true,
             }} 
          value={formik.values.dob}
          onChange={formik.handleChange}
          error={formik.touched.dob && Boolean(formik.errors.dob)}
          helperText={formik.touched.dob && formik.errors.dob}
            />
          <TextField 
          fullWidth
          margin="normal"
          id="userName"
          name="userName"
          required
          label="User Name"
          autoFocus
          variant="standard"
          value={formik.values.userName}
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}  
          />
        <InputLabel id="labelrole">Role</InputLabel>
          <Select id="role" name="role"
          margin="normal" labelId="labelrole" 
          value={formik.values.role} 
          required 
          fullWidth
          variant="standard"
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}  
          >
          {/* <MenuItem value={"physician"} name="role" >Physician</MenuItem> */}
          <MenuItem value={"patient"} name="role">Patient</MenuItem>
        </Select>
        <TextField 
          fullWidth
          margin="normal"
          id="mobileNumber"
          name="mobileNumber"
          required
          label="Mobile Number"
          autoFocus
          variant="standard"
          value={formik.values.mobileNumber}
          onChange={formik.handleChange}
          error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
          helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}  
          />
        <TextField
          fullWidth
          margin="normal"
          id="password"
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          autoComplete="password"
          autoFocus
          variant="standard"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ?  <Visibility /> : <VisibilityOff /> }
              </IconButton>
            </InputAdornment>,
          }}
          
        />
        <TextField
          fullWidth
          margin="normal"
          id="retypepassword"
          name="retypepassword"
          label="Retype Password"
          type={showPassword ? 'text' : 'password'}
          autoComplete="password"
          autoFocus
          variant="standard"
          value={formik.values.retypepassword}
          onChange={formik.handleChange}
          error={formik.touched.retypepassword && Boolean(formik.errors.retypepassword)}
          helperText={formik.touched.retypepassword && formik.errors.retypepassword}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ?  <Visibility />: <VisibilityOff /> }
              </IconButton>
            </InputAdornment>,
          }}
     />
    
        <Button color="primary" variant="contained" fullWidth type="submit">
          Register 
        </Button>
      </Box>
    </div>
  );
};