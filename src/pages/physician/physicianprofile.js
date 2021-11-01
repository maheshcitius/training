import { Container, Typography } from '@mui/material';

import Page from '../../shared/Page';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Box, Button, IconButton } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { userActions } from '../../redux-store/actions'
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  firstname: yup
    .string('Enter your First Name')
    .min(4, 'First Name should be of minimum 8 characters length')
    .required('First Name required'),
  lastname: yup
    .string('Enter your Last Name')
    .min(4, 'Last Name should be of minimum 4 characters length')
    .required('Last Name required'),
  dob: yup
    .date('Enter your Birtday')
    .required('Birtday required'),
  mobileNumber: yup
    .number('Enter your Mobile Number')
    .min(10, 'User Name should be of 10 characters length')
    .required('User Name required'),
  specialization: yup
    .string('Select the Specialization')
    .min(1, 'please select Role')
    .required('Specialization is required'),
});

export const PhysicianProfile = () => {
  let [showPassword, setShowPassword] = useState(false)
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [data, setData] = useState([]);
  const theme = useTheme();

  const [personName, setPersonName] = useState([]);
  const [disbaleField, setDisbaleField] = useState(true);
  const dispatch = useDispatch();
  


  const { updateUser } = bindActionCreators(userActions, dispatch);
  const physicians = useSelector((state) => state.authentication.currentUser);
  const statevall = useSelector((state) => state);
  useEffect(() => {
    
  }, [physicians])

  console.log('physicians--',physicians);
  console.log('statevall--',statevall);
  const handlePhySubmit = (values) => {
    console.log('values---', values);
    updateUser(values.id, values);
  };
  const formik = useFormik({
    initialValues: {
      id: physicians.id,
      firstname: physicians.firstname,
      lastname: physicians.lastname,
      dob: physicians.dob,
      email: physicians.email,
      role: physicians.role,
      mobileNumber: physicians.mobileNumber,
      gender: physicians.gender,
      specialization: physicians.specialization,
      experience: physicians.experience
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("inside on submit");
      if (values.password != values.retypepassword) {
        alert('enterd passords are not matching');
      } else {
        console.log("inside on submit--");
        handlePhySubmit(values)
      }
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(
      showPassword = !showPassword);
  };

  const handleform = () => {
    setDisbaleField(false);
  };
  const handleMouseDownPassword = () => {
    // event.preventDefault();
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  console.log('physicians values--', physicians);
  console.log('formik values--', formik.values);

  return (

    <Page title="Physician | Profile">
      <Container maxWidth="xl">
        <Box sl={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome {physicians.firstname},  {physicians.lastname} </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 5 }}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Button variant="contained"
                  to="#"
                  startIcon={<Icon icon={plusFill} />} onClick={handleform}> Edit Personal Details</Button>
                <TextField
                  id="firstName"
                  name="firstName"
                  margin="normal"
                  disabled={disbaleField}
                  fullWidth
                  label="First Name"
                  fullWidth
                  autoFocus
                  variant="standard"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                  helperText={formik.touched.firstname && formik.errors.firstname}
                />
                <TextField
                  id="lastName"
                  name="lastName"
                  margin="normal"
                  disabled={disbaleField}
                  disabled={disbaleField}
                  fullWidth
                  label="Last Name"
                  fullWidth
                  autoFocus
                  variant="standard"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                  helperText={formik.touched.lastname && formik.errors.lastname}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="email"
                  name="email"
                  disabled={disbaleField}
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
                  disabled={disbaleField}
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
                <InputLabel id="labelrole">Gender</InputLabel>
                <Select id="gender" name="gender"
                  margin="normal" labelId="labelrole"
                  value={formik.values.gender}
                  required
                  disabled={disbaleField}
                  fullWidth
                  // variant="standard"
                  onChange={formik.handleChange}
                  error={formik.touched.gender && Boolean(formik.errors.gender)}
                  helperText={formik.touched.gender && formik.errors.gender}
                >
                  <MenuItem value={"male"} name="gender">Male</MenuItem>
                  <MenuItem value={"female"} name="gender">Female</MenuItem>
                  <MenuItem value={"other"} name="gender">Other</MenuItem>
                </Select>
                <InputLabel id="labelrole">Specialization</InputLabel>
                <Select id="specialization" name="specialization"
                  margin="normal" labelId="labelrole"
                  value={formik.values.specialization}
                  required
                  disabled={disbaleField}
                  fullWidth
                  // variant="standard"
                  onChange={formik.handleChange}
                  error={formik.touched.specialization && Boolean(formik.errors.specialization)}
                  helperText={formik.touched.specialization && formik.errors.specialization}
                >
                  <MenuItem value={"Immunologists"} name="specialization">Immunologists</MenuItem>
                  <MenuItem value={"Cardiologists"} name="specialization">Cardiologists</MenuItem>
                  <MenuItem value={"Dermatologists"} name="specialization">Dermatologists</MenuItem>
                  <MenuItem value={"Neurologists"} name="specialization">Neurologists</MenuItem>
                </Select>
                <TextField
                  fullWidth
                  margin="normal"
                  id="experience"
                  name="experience"
                  disabled={disbaleField}
                  label="Experience in years"
                  autoComplete="experience in years"
                  autoFocus
                  variant="standard"
                  value={formik.values.experience}
                  onChange={formik.handleChange}
                  error={formik.touched.experience && Boolean(formik.errors.experience)}
                  helperText={formik.touched.experience && formik.errors.experience}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="mobileNumber"
                  name="mobileNumber"
                  disabled={disbaleField}
                  label="Mobile Number"
                  autoFocus
                  variant="standard"
                  value={formik.values.mobileNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                  helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                />
                <Button color="primary" variant="contained" fullWidth disabled={disbaleField} type="submit">
                  Update
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Page>

  );

};

