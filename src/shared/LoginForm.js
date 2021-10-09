
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {TextField,Box, Button ,IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const LoginForm = (props) => {

  let [showPassword, setShowPassword] = React.useState(false)

    let formSubmit = props.submit;
  const formik = useFormik({
    initialValues: {
      email: 'olivier@mail.com',
      password: 'bestPassw0rd',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        formSubmit(values)
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
          fullWidth
          margin="normal"
          id="email"
          name="email"
          required
          label="Email"
          autoComplete="email"
          autoFocus
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}

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
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>,
          }}
          
        />
         

        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign In
        </Button>
      </Box>
    </div>
  );
};