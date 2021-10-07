import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { useSelector } from "react-redux"
import { PrivateRoute } from './components/PrivateRoutes';
import Snackbarr from './shared/Snackbar';
import {AdminDashboard} from './pages/admin/index';
import {PatientDashboard} from './pages/patient/index'
import {PhysicianDashboard} from './pages/physician'
import Login from './pages/auth/login';
import {history} from './helpers'
import { ManagePhysician } from './pages/admin/ManagePhysicianRecords/ManagePhysician';
import { ManageAppointments } from './pages/admin/ManageAppointments/ManageAppointments';
import { ManagepatientRecords } from './pages/admin/ManagePatientRecords/ManagePatientRecords';
import { Billing } from './pages/admin/Billing/Billing';

function App() {
  
  const SnackState = useSelector((state) => state.snack);
  console.log(SnackState)


  return (
    <Router history={history}>

    <div className="App">
     
    
     <Snackbarr timeout={3000} ></Snackbarr>
    
        <Switch>
         <PrivateRoute exact path="/" component={AdminDashboard} />
           
          <Route path="/login">
           <Login></Login>
          </Route>
           <Route path= "/managephysician" component={ManagePhysician}/>
           <Route path= "/manageappointments" component={ManageAppointments} />
           <Route path= "/managepatients" component={ManagepatientRecords} />
           <Route path= "/billing" component={Billing} />
        </Switch>

    </div>
    </Router>
  );
}

export default App;
