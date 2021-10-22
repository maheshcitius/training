import { Container, Typography } from '@mui/material';

import Page from '../../shared/Page';
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
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState,useEffect} from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { physiciansActions } from '../../actions'

import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import {createdFields} from '../../helpers/defaultfields';
import axios from 'axios';

export const PhysicianProfile= () =>        
 {
  let [showPassword, setShowPassword] = React.useState(false)
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [data, setData] = useState('');
  const theme = useTheme();
  const names = [
    'Immunologists',
    'Anesthesiologists',
    'Cardiologists',
    'Colon and Rectal Surgeons',
    'Critical Care Medicine Specialists',
    'Dermatologists',
    'Endocrinologists',
    'Emergency Medicine Specialists',
    'Family Physicians',
    'Gastroenterologists',
    'Geriatric Medicine Specialists',
    'Hematologists',
    'Nephrologists',
    'Neurologists',
    'Oncologists',
    'Osteopaths',
    'Otolaryngologists',
    'Radiologists',
    'Rheumatologists',
    'Urologists'
  ];
  const [personName, setPersonName] = useState([]);
 
  const [disbaleField, setDisbaleField] = useState(true);
  const dispatch = useDispatch();
  const { getPhysicianById } = bindActionCreators(physiciansActions, dispatch);
  const physicians = useSelector((state) => state.physicians);

    
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));
    setUserName(user.user.firstname)
    setUserId(user.user.id);
     const datas = getPhysicianById(user.user.id); 
      setData(datas)  
  },[]);
  console.log('physician data in profile',physicians);
console.log("deata--bantu",{data});
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
    retypepassword: ''
  }})
  const handleClickShowPassword = () => {
    setShowPassword(
      showPassword =!showPassword);
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

    return (
        <Page title="Physician | Profile">
        <Container maxWidth="xl">
          <Box sl={{ pb: 5 }}>
            <Typography variant="h4">Hi, Welcome {userName}
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 5 }}>
            </Box>
            
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Button variant="contained"
            to="#"
            startIcon={<Icon icon={plusFill} />} onClick={handleform}> Edit Personal Details</Button>
            <TextField 
          id="firstName"  
          name="firstName"
          margin="normal" 
           
          disabled = {disbaleField}
          label="First Name"  
          fullWidth
          autoFocus
          variant="standard"
         // value={formik.values.firstName}
          value={userName }
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          />
         
          <TextField 
          id="lastName"  
          name="lastName"
          margin="normal" 
              
          disabled = {disbaleField}
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
             
          label="Email"
          autoComplete="email"
          autoFocus
          disabled = {disbaleField}
          variant="standard"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <FormLabel component="legend">Gender</FormLabel>
  <RadioGroup row    aria-label="gender" name="row-radio-buttons-group">
    <FormControlLabel disabled = {disbaleField} value="female" control={<Radio />} label="Female" />
    <FormControlLabel disabled = {disbaleField} value="male" control={<Radio />} label="Male" />
    <FormControlLabel disabled = {disbaleField} value="other" control={<Radio />} label="Other" />
    </RadioGroup>
       <TextField  
          fullWidth
          margin="normal"
          id="dob"
          name="dob"
             
          disabled = {disbaleField}
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
          <Select
          multiple
          fullWidth
          displayEmpty
          autoFocus
          disabled = {disbaleField}
          variant="standard"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select Specialization..</em>;
            }
            
            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        
        <TextField 
          fullWidth
          margin="normal"
          id="mobileNumber"
          name="mobileNumber"
             
          disabled = {disbaleField}
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
          id="experience"
          name="experience"
             
          disabled = {disbaleField}
          label="Experience"
          autoFocus
          variant="standard"
          value={formik.values.mobileNumber}
          onChange={formik.handleChange}
          error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
          helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}  
          />
        <TextField
          fullWidth
          disabled = {disbaleField}
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
          disabled = {disbaleField}
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
    
        <Button disabled = {disbaleField} color="primary" variant="contained" fullWidth type="submit">
          Update Profile 
        </Button>
        </CardContent>
        </Card>
          </Box>
          </Container>
          </Page>
  )
 
      
     
 };

