
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {TextField,Box, Button ,IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const validationSchema =
yup.object({
    oldPassword: yup.string()
                    .required('Password is required')
                    .min(8, 'Password should be of minimum 8 characters length'),
    newPassword: yup.string()
                .required('Password is required')
                .when("oldPassword", {
                    is: val => (val && val.length > 0 ? true : false),
                    then: yup.string().oneOf(
                    [yup.ref("oldPassword")],
                    "Both password need to be the same"
                    )
                })
  });


    
//  yup.object().shape({
//     oldPassword: yup
//             .string('Enter your password')
//             .min(8, 'Password should be of minimum 8 characters length')
//             .required('Password is required'),
//     newPassword: yup
//             .string('Enter your password')
//             .min(8, 'Password should be of minimum 8 characters length')
//             .required('Password is required')
//             .string().when("password", {
//                 is: val => (val && val.length > 0 ? true : false),
//                 then: yup.string().oneOf(
//                   [yup.ref("password")],
//                   "Both password need to be the same"
//                 )
//             })
//   });

export const ForgotPWForm = (props) => {

  let [showPassword, setShowPassword] = React.useState(false)
  let [showPassword1, setShowPassword1] = React.useState(false)


  let formSubmit = props.submit;
  const formik = useFormik({
        initialValues: {
            newPassword: '',
            oldPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            formSubmit(values)
        },
    });
 

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>

        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 5 }}>
            {/* <label for="passowrd">Old Password</label> */}
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
                        onClick={() => {
                            setShowPassword(
                              showPassword =!showPassword);
                          }}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>,
                }}
            
            />
            
            {/* <label for="passowrd"></label> */}
            <TextField
                fullWidth
                margin="normal"
                id="newPassword"
                name="newPassword"
                label="New Password"
                type={showPassword1 ? 'text' : 'password'}
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
                        onClick={() => {
                            setShowPassword1(
                              showPassword1 =!showPassword1);
                          }}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>,
                }}
            
            />

            {/* {formik.touched.newPassword && formik.errors.newPassword ? (
                    <div>{formik.errors.newPassword}</div>
                ) : null} */}



            <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
            </Button>
        </Box>
    </div>
  );
};