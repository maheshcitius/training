import './App.css';
import {
  BrowserRouter,
  Link,
  Outlet,
  useRoutes
} from 'react-router-dom';

import { useSelector } from "react-redux"
import { PrivateRoute } from './components/PrivateRoutes';
import Snackbarr from './shared/Snackbar';
import {AdminDashboard} from './pages/admin/index';
import {PatientDashboard} from './pages/patient/index'
import {PhysicianDashboard} from './pages/physician'
import Login from './pages/auth/login';
import {history } from './helpers'
//import { Login } from '@mui/icons-material';

import HomeLayout from './shared/HomeLayout';
import { ManagePatients } from './pages/admin/managePatients';
import { AdminManagePhysicians } from './pages/admin/managephysicians';

import { ManagePhysicianPatients } from './pages/physician/managepatient';
import { AdminManageAppointments } from './pages/admin/manageappointments';
import Account from './pages/profile';
import NotFound from './pages/notFound';
import {routes} from './constants/index'

function App() {
  
  const SnackState = useSelector((state) => state.snack);
  console.log(SnackState)
  
  let element = useRoutes(routes);
  return element;

  }

export default App;
