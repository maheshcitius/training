
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {TextField,Box, Button ,IconButton } from '@mui/material';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),

});

export const DemoForm = (props) => {
  let formSubmit = props.submit;
  const formik = useFormik({
    initialValues: {
      email: ''
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
        <Button color="primary" variant="contained" fullWidth type="submit">
         Click
        </Button>
      </Box>
    </div>
  );
};