import { Link as RouterLink } from 'react-router-dom';
import React, {  useEffect } from 'react';

// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/authentication/register';
import AuthSocial from '../components/authentication/AuthSocial';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { userActions } from '../actions'
import { useNavigate, NavLink } from "react-router-dom";
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Register() {

  const navigate = useNavigate();
  useEffect(() => {
       // Redirect to dashboard
        if(localStorage.getItem('user')){

         let user = JSON.parse(localStorage.getItem('user')).user;
         console.log("login role" , user)

        
         navigate(`/${user.role}/dashboard`)

       }
       
     });
     const dispatch = useDispatch();
     const { userRegistration } = bindActionCreators(userActions, dispatch);
   
   const handleSubmit = (values) => {
    console.log(values);
     userRegistration({
       firstName:values.firstName,
       lastName:values.lastName,
       dateOfBirth:values.dob,
       email:values.email,
       role: 'patient',
       mobileNumber: values.mobileNumber,
       password: values.password,
       createdOn: values.createdOn,
       createdBy: values.updatedOn
       })
     };

  return (
    <RootStyle title="Register | Minimal-UI">
      <AuthLayout>
        Already have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          Login
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 2, mb: 5 }}>
            Manage your health more effectively with Patient Portal
          </Typography>
          <img alt="register" src="/static/illustrations/register.jpg" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Get started 
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              
            </Typography>
          </Box>

         

          <RegisterForm submit={handleSubmit} />

        

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?&nbsp;
              <Link to="/login" component={RouterLink}>
                Login
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
