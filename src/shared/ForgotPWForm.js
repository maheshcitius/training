
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {TextField,Box, Button ,IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const validationSchema = yup.object({
    newPassword: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    oldPassword: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export const ForgotPWForm = (props) => {

  let [showPassword, setShowPassword] = React.useState(false)

  let formSubmit = props.submit;
  const formik = useFormik({
        initialValues: {
            newPassword: '',
            oldPassword: '',
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
            {/* <TextField
                fullWidth
                margin="normal"
                id="newPassword"
                name="newPassword"
                required
                label="New Password"
                autoComplete="newPassword"
                autoFocus
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                helperText={formik.touched.newPassword && formik.errors.newPassword}
            />
        

            <TextField
                fullWidth
                margin="normal"
                id="oldPassword"
                name="oldPassword"
                required
                label="oldPassword"
                autoComplete="oldPassword"
                autoFocus
                value={formik.values.oldPassword}
                onChange={formik.handleChange}
                error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
                helperText={formik.touched.oldPassword && formik.errors.oldPassword}
            /> */}


            <TextField
                fullWidth
                margin="normal"
                id="newPassword"
                name="newPassword"
                label="New Password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="password"
                autoFocus
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                helperText={formik.touched.newPassword && formik.errors.newPassword}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>,
                }}
            
            />


            <TextField
                fullWidth
                margin="normal"
                id="oldPassword"
                name="oldPassword"
                label="Old Password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="password"
                autoFocus
                value={formik.values.oldPassword}
                onChange={formik.handleChange}
                error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
                helperText={formik.touched.oldPassword && formik.errors.oldPassword}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>,
                }}
            
            />
            

            <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
            </Button>
        </Box>
    </div>
  );
};