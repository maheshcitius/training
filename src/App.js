import React from "react";
import Scard from './shared/Scard';
import Login from './pages/auth/Login';
import ForgotPassword from "./pages/auth/ForgotPassword";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { useSelector } from "react-redux";
import { PrivateRoute } from './components/PrivateRoutes';
import Snackbarr from './shared/Snackbar';
import {AdminDashboard} from './pages/admin/index';
import {PatientDashboard} from './pages/patient/index';
import {PhysicianDashboard} from './pages/physician';
import {history} from './helpers'

function App() {
  
  const SnackState = useSelector((state) => state.snack);
  console.log(SnackState);

  const characters=[
    {
      id: 1,
      name: "Wonder Woman",
      alterEgo: "Diana Prince",
      alignment: "hero"
    },
    {
      id: 2,
      name: "Poison Ivy",
      alterEgo: "Pamela Lillian Isley",
      alignment: "villain"
    },
    {
      id: 3,
      name: "Black Canary",
      alterEgo: "Dinah Drake",
      alignment: "hero"
    },
    {
      id: 4,
      name: "Catwoman",
      alterEgo: "Selina Kyle",
      alignment: "villain"
    }
  ];


  return (
    <Router history={history}>

    <div className="App">
     
    
     <Snackbarr timeout={3000} ></Snackbarr>
    
        <Switch>
         <PrivateRoute exact path="/" component={AdminDashboard} />
           
          <Route path="/login">
            <Login1 firstBX="User Name" secBX="Password" title="Sign In"/>
          </Route>
          
        </Switch>

    </div>
    </Router>
  );
}


