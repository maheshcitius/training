import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

function App() {
  
  const SnackState = useSelector((state) => state.snack);
  console.log(SnackState)
  

  return (
    <Router history={history}>

    <div className="App">
     
     <Snackbarr timeout={3000} ></Snackbarr>

        <Switch>
         <PrivateRoute exact path="/patient" component={PatientDashboard} />
          
         <PrivateRoute exact path="/physician"  >
              
               <HomeLayout>
                     <PhysicianDashboard>

                     </PhysicianDashboard>
              </HomeLayout>

          </PrivateRoute>

          <PrivateRoute exact path="/physician/mp"  >
              
              <HomeLayout>
                    <ManagePhysicianPatients>

                    </ManagePhysicianPatients>
             </HomeLayout>

           
         </PrivateRoute>

         <PrivateRoute exact path="/admin"  >
           <HomeLayout>
                <AdminDashboard></AdminDashboard>
           </HomeLayout>
          
         </PrivateRoute>

        
         <PrivateRoute exact path="/admin/patients"  >
           <HomeLayout>
              <ManagePatients></ManagePatients>           
           </HomeLayout>
          
         </PrivateRoute>
         <PrivateRoute exact path="/admin/physicians"  >
           <HomeLayout>
              <AdminManagePhysicians></AdminManagePhysicians>           
           </HomeLayout>
          
         </PrivateRoute>
         <PrivateRoute exact path="/admin/appointments"  >
           <HomeLayout>
              <AdminManageAppointments></AdminManageAppointments>       
           </HomeLayout>
          
         </PrivateRoute>
         
           
          <Route path="/login">
            <Login></Login>             
          </Route>
          
        </Switch>

    </div>
    </Router>
  );
}

export default App;
