import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {TextField,Box, Button ,IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const validationSchema = yup.object({
    verifyEmail: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
});

export const EmailVerificationFormForForgotPW = (props) => {

  let formSubmit = props.submit;
  const formik = useFormik({
        initialValues: {
            verifyEmail: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            formSubmit(values)
        },
    });
  

  return (
    <div>

        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 5 }}>
            <TextField
                fullWidth
                margin="normal"
                id="verifyEmail"
                name="verifyEmail"
                required
                label="Enter Email"
                autoComplete="verifyEmail"
                autoFocus
                value={formik.values.verifyEmail}
                onChange={formik.handleChange}
                error={formik.touched.verifyEmail && Boolean(formik.errors.verifyEmail)}
                helperText={formik.touched.verifyEmail && formik.errors.verifyEmail}
            />
        
            <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
            </Button>
        </Box>
    </div>
  );
};