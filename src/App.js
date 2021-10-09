import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { useSelector } from "react-redux"
import { PrivateRoute } from './components/PrivateRoutes';
import Snackbarr from './shared/Snackbar';
// import {AdminDashboard} from './pages/admin/index';
import {PatientDashboard} from './pages/patient/index'
import {PhysicianDashboard} from './pages/physician'
import Login from './pages/auth/login';
import {history} from './helpers'
//import { Login } from '@mui/icons-material';

import Dashboard from './shared/DashboardLayout';

function App() {
  
  const SnackState = useSelector((state) => state.snack);
  console.log(SnackState)


  return (
    <Router history={history}>

    <div className="App">
     
    
     <Snackbarr timeout={3000} ></Snackbarr>
    
        <Switch>
         <PrivateRoute exact path="/patient" component={PatientDashboard} />
         <PrivateRoute exact path="/physician" component={PhysicianDashboard} />   
         <PrivateRoute exact path="/" component={Dashboard } />
           
          <Route path="/login">
            <Login></Login>             
          </Route>
          
        </Switch>

    </div>
    </Router>
  );
}

export default App;
