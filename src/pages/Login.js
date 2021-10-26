import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography ,Alert } from '@mui/material';
import React, {  useEffect } from 'react';

// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { LoadData } from '../helpers/loadData';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from './authentication/login'
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { authActions } from '../redux-store/actions'
import { useNavigate , NavLink} from "react-router-dom";
import { useSelector } from "react-redux";

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

export default function Login() {

  const navigate = useNavigate();

  const UserInfo    = useSelector((state) => state.authentication);
  const dispatch    = useDispatch();
  const { login   } = bindActionCreators(authActions, dispatch);

   useEffect(() => {
       // Redirect to dashboard
         if(localStorage.getItem('user')){

          let user = JSON.parse(localStorage.getItem('user')).user;
          
         
          navigate(`/${user.role}/dashboard`)

        }
         
      });

   

  const handleSubmit = (values) => {
   
    login({
        username: values.email,
        password: values.password,
      })

      LoadData();
    
  };

  return (
    <RootStyle title="Login | Patient Portal">
      <AuthLayout>
        Don’t have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
          Get started
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Hi, Welcome Back
          </Typography>
          <img src="/static/illustrations/login.jpg" alt="login" />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Sign in to Patient Portal
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
          </Stack>
          {/* <AuthSocial /> */}
          
          {!UserInfo.isLoggedIn && 
          <p className='text-danger'> {UserInfo.globalmessage} </p>
           }

          <LoginForm submit={handleSubmit} />


          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="register">
                Get started
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
