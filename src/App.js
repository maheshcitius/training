import './App.css';
import {
  BrowserRouter,
  Link,
  Outlet,
  useRoutes
} from 'react-router-dom';

import { useSelector } from "react-redux"


import {routes} from './constants/index'

function App() {
  
  const SnackState = useSelector((state) => state.snack);
  console.log(SnackState)
  
  let element = useRoutes(routes);
  return element;

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

          <Route path="/register">
          <Register></Register>            
          </Route>
          
        </Switch>

    </div>
    </Router>
  );
}

export default App;
