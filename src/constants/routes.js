import { PrivateRoute } from '../components/PrivateRoutes'
import {AdminDashboard} from '../pages/admin/index';
import {PatientDashboard} from '../pages/patient/index'
import {PhysicianDashboard} from '../pages/physician'
import Login from "../pages/auth/login"
import Register from "../pages/auth/register"
import { ManagePatients } from '../pages/admin/managePatients';
import { AdminManagePhysicians } from '../pages/admin/managephysicians';
import { ManagePhysicianPatients } from '../pages/physician/managepatient';
import { AdminManageAppointments } from '../pages/admin/manageappointments';
import Account from '../pages/profile';
import NotFound from '../pages/notFound';
import HomeLayout from '../shared/HomeLayout';

export const routes = [
    {
      path: "/admin",
      element: <AdminDashboard />,
      children: [
        {   path: "patients", 
            element: <ManagePatients/>,
            children: [{ path: ":id", element: <p>Patient Details</p>}]
         },
        {
          path: "physicians",
          element: <AdminManagePhysicians/>,
          children: [{ path: ":id", element: <p>phy1 </p> }],
        },
        { path: "appointments", element: <AdminManageAppointments/> },
        { path: "billings", element: <p>Billings</p> }
      ]
    },
    {
      path: "/patient",
      element: <PatientDashboard />,
      children: [
        {   path: "demographics", 
            element: <ManagePatients/>,
            children: [{ path: ":id", element: <p>Patient Details</p>}]
         },
        {
          path: "physicians",
          element: <p>Manage phy</p>,
          children: [{ path: ":id", element: <p>phy1 </p> }],
        },
        { path: "schedule-appointment", element: <p>Sc Appointments</p> },
        { path: "appointments", element: <p>Appointments</p> },
        { path: "vitals", element: <p>Vitals</p> },
        { path: "education", element: <p>Vitals</p> },
        { path: "billing", element: <p>Vitals</p> }

      ]
    },
    {
      path: "/physician",
      element: <PhysicianDashboard />,
      children: [
        {   path: "patients", 
            element: <p>Patient Details</p> ,
            children: [{ path: ":id", element: <p>Patient Details</p>}]
         },
        {
          path: "appointments",
          element: <p>Manage Appointments</p>,
          children: [{ path: ":id", element: <p>Appointmenta </p> }],
        },
        { path: "reports", element: <p>Reports</p> },
        

      ]
    },
    { path: "/profile", element: <HomeLayout><Account/></HomeLayout> },
    { path: "/login", element: <Login/> },
    { path: "/register", element: <Register></Register>},
    { path: "/forgot-password", element: <p>Forgot Password</p> },
    { path: "*", element: <NotFound /> }

]
