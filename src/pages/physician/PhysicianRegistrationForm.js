
// import React from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import {TextField,Box, Button ,IconButton } from '@mui/material';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputAdornment from '@mui/material/InputAdornment';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { useDispatch } from "react-redux";
// import  {toggleSnackbarOpen}  from '../../actions/snackbar-actions';
// import  Snackbarr  from '../../shared/Snackbar';

// import {createdFields} from '../../helpers/defaultfields';

// const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//     firstName: yup
//     .string('Enter your First Name')
//     .min(4,'First Name should be of minimum 8 characters length')
//     .required('First Name required'),
//     lastName: yup
//     .string('Enter your Last Name')
//     .min(4,'Last Name should be of minimum 4 characters length')
//     .required('Last Name required'),
//     dob: yup
//     .date('Enter your Birtday')
//     .required('Birtday required'),
//     userName: yup
//     .string('Enter your User Name')
//     .min(6,'User Name should be of minimum 6 characters length')
//     .required('User Name required'),
//     mobileNumber: yup
//     .number('Enter your Mobile Number')
//     .min(10,'User Name should be of 10 characters length')
//     .required('User Name required'),
//     password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
//     retypepassword: yup
//     .string('Retype your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required')
// });

// export const PhysicanRegistrationForm = (props) => {
// const dispatch = useDispatch(); 
//   let [showPassword, setShowPassword] = React.useState(false)
  
//   let formSubmit = props.submit;
//   const formik = useFormik({
//     initialValues: {
//       firstName:'',
//       lastName:'',
//       dob:'',
//       userName: '',
//       email: '',
//       role: '',
//       mobileNumber: '',
//       password: '',
//       retypepassword: '',
//       createdOn: createdFields.createdOn,
//       updatedOn: createdFields.updatedOn
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       if(values.password != values.retypepassword){
//         alert('enterd passords are not matching');
//       }else{
//         formSubmit(values)
//       }
//     },
//   });
//   const handleClickShowPassword = () => {
//     setShowPassword(
//       showPassword =!showPassword);
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div>      
//       <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 5 }}>
//       <TextField 
//           id="firstName"  
//           name="firstName"
//           margin="normal" 
//           required 
//           fullWidth 
//           label="First Name"  
//           fullWidth
//           autoFocus
//           variant="standard"
//           value={formik.values.firstName}
//           onChange={formik.handleChange}
//           error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//           helperText={formik.touched.firstName && formik.errors.firstName}
//           />
//           <TextField 
//           id="lastName"  
//           name="lastName"
//           margin="normal" 
//           required 
//           fullWidth 
//           label="Last Name"  
//           fullWidth
//           autoFocus
//           variant="standard"
//           value={formik.values.lastName}
//           onChange={formik.handleChange}
//           error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//           helperText={formik.touched.lastName && formik.errors.lastName}
//           />
//         <TextField
//           fullWidth
//           margin="normal"
//           id="email"
//           name="email"
//           required
//           label="Email"
//           autoComplete="email"
//           autoFocus
//           variant="standard"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//         />
//        <TextField  
//           fullWidth
//           margin="normal"
//           id="dob"
//           name="dob"
//           required
//           label="Date of Birth"
//           autoFocus
//           variant="standard"
//           type="date"  
//                 InputLabelProps={{
//                 shrink: true,
//              }} 
//           value={formik.values.dob}
//           onChange={formik.handleChange}
//           error={formik.touched.dob && Boolean(formik.errors.dob)}
//           helperText={formik.touched.dob && formik.errors.dob}
//             />
//           <TextField 
//           fullWidth
//           margin="normal"
//           id="userName"
//           name="userName"
//           required
//           label="User Name"
//           autoFocus
//           variant="standard"
//           value={formik.values.userName}
//           onChange={formik.handleChange}
//           error={formik.touched.userName && Boolean(formik.errors.userName)}
//           helperText={formik.touched.userName && formik.errors.userName}  
//           />
    
//         <TextField 
//           fullWidth
//           margin="normal"
//           id="mobileNumber"
//           name="mobileNumber"
//           required
//           label="Mobile Number"
//           autoFocus
//           variant="standard"
//           value={formik.values.mobileNumber}
//           onChange={formik.handleChange}
//           error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
//           helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}  
//           />
//         <TextField
//           fullWidth
//           margin="normal"
//           id="password"
//           name="password"
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           autoComplete="password"
//           autoFocus
//           variant="standard"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//           InputProps={{
//             endAdornment: <InputAdornment position="end">
//               <IconButton
//                 aria-label="toggle password visibility"
//                 onClick={handleClickShowPassword}
//                 onMouseDown={handleMouseDownPassword}
//                 edge="end"
//               >
//                 {showPassword ?  <Visibility /> : <VisibilityOff /> }
//               </IconButton>
//             </InputAdornment>,
//           }}
          
//         />
//         <TextField
//           fullWidth
//           margin="normal"
//           id="retypepassword"
//           name="retypepassword"
//           label="Retype Password"
//           type={showPassword ? 'text' : 'password'}
//           autoComplete="password"
//           autoFocus
//           variant="standard"
//           value={formik.values.retypepassword}
//           onChange={formik.handleChange}
//           error={formik.touched.retypepassword && Boolean(formik.errors.retypepassword)}
//           helperText={formik.touched.retypepassword && formik.errors.retypepassword}
//           InputProps={{
//             endAdornment: <InputAdornment position="end">
//               <IconButton
//                 aria-label="toggle password visibility"
//                 onClick={handleClickShowPassword}
//                 onMouseDown={handleMouseDownPassword}
//                 edge="end"
//               >
//                 {showPassword ?  <Visibility />: <VisibilityOff /> }
//               </IconButton>
//             </InputAdornment>,
//           }}
//      />
    
//         <Button color="primary" variant="contained" fullWidth type="submit">
//           Register 
//         </Button>
//       </Box>
//     </div>
//   );
// };



// import React from 'react';
// //import Button from '@material-ui/core/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// import { Button,TextField } from '@mui/material'
// //import { TextField } from '@material-ui/core';

// import { useFormik } from 'formik';
//  import * as yup from 'yup';

// const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//     firstName: yup
//     .string('Enter your First Name')
//     .min(4,'First Name should be of minimum 8 characters length')
//     .required('First Name required'),
//     lastName: yup
//     .string('Enter your Last Name')
//     .min(4,'Last Name should be of minimum 4 characters length')
//     .required('Last Name required'),
//     dob: yup
//     .date('Enter your Birtday')
//     .required('Birtday required'),
//     userName: yup
//     .string('Enter your User Name')
//     .min(6,'User Name should be of minimum 6 characters length')
//     .required('User Name required'),
//     mobileNumber: yup
//     .number('Enter your Mobile Number')
//     .min(10,'User Name should be of 10 characters length')
//     .required('User Name required'),
//     password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
//     retypepassword: yup
//     .string('Retype your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required')
// });
// export const PhysicanRegistrationForm = ({open,handleClose,data,onChange,handleFormSubmit})=> {
//   console.log(data)
//  const {
//    id, 
//  firstName,
//  lastName,
//  dateOfBirth,
//  userName,
//  email,
//  mobileNumber}=data
// console.log('id--',id);
//  let formSubmit = handleFormSubmit;
//    const formik = useFormik({
//      initialValues: {
//        firstName:'',
//        lastName:'',
//        dob:'',
//        userName: '',
//        email: '',
//        role: '',
//        mobileNumber: '',
//        password: '',
//        retypepassword: ''
//      },
//      validationSchema: validationSchema,
//      onSubmit: (values) => {
//        if(values.password != values.retypepassword){
//          alert('enterd passords are not matching');
//        }else{
//          formSubmit(values)
//        }
//      },
//    });
//   return (
//     <div>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{id?"Update user":"Create new user"}</DialogTitle>
//         <DialogContent>
//          <form>
//              <TextField id="firstName" value={firstName} onChange={e=>onChange(e)} placeholder="Enter name" label="first Name" variant="outlined" margin="dense" fullWidth />
//              <TextField id="lastName" value={lastName} onChange={e=>onChange(e)} placeholder="Enter lastname" label="last Name" variant="outlined" margin="dense" fullWidth />
//              <TextField id="email" value={email} onChange={e=>onChange(e)} placeholder="Enter email" label="email" variant="outlined" margin="dense" fullWidth />
//              <TextField id="mobileNumber" value={mobileNumber} onChange={e=>onChange(e)} placeholder="Enter phone number" label="mobileNumber" variant="outlined" margin="dense" fullWidth />
//              <TextField id="dateOfBirth" value={dateOfBirth} onChange={e=>onChange(e)}
//               placeholder="Enter Date of birth" label="dateOfBirth" variant="outlined"
//                margin="dense" 
//                type="date"  
//                 InputLabelProps={{
//                         shrink: true,
//                             }} 
//                fullWidth />
//          </form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="secondary" variant="outlined">
//             Cancel
//           </Button>
//           <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
//             {id?"Update":"Submit"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }


import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------


import { createdFields } from '../../helpers';



export default function PhysicanRegistrationForm(props) {
  console.log('inside registration form',props);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  });


  let formSubmit = props.submit;

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      createdOn: createdFields.createdOn,
      updatedOn: createdFields.updatedOn      
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      
      if(values.password != values.retypepassword){
        alert('enterd passords are not matching');
     // snackbarActions.toggleSnackbarOpen({message:'Password is different..!',type:'success'});
      }else{
        formSubmit(values)
      }
      //navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
            <Button color="primary" variant="contained" fullWidth type="submit">
               Invite Physician
            </Button>

        </Stack>
      </Form>
    </FormikProvider>
  );
}

