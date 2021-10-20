import { Navigate,useRoutes } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoutes'


import { 
  AdminMedicalData , 
  AdminManagePhysicians ,
  AdminManageAppointments ,
  AdminManagePatients, 
  AdminDashboard ,

  PatientDashboard,
  PatientDemographics ,
  PatientImmunizations ,
  PatientAppointments ,
  PatientMedicationsAndAllergies ,
  PatientEducation ,
  PatientScheduleAppointments ,

  PhysicianDashboard ,
  PhysicianManageAppointments ,
  PhysicianManagePatients ,
  
  LoginPage,
  RegisterPage,
  EmailVerificationForForgotPW,
  ForgotPassword,

  FormDialogs,
  InviteUser



 } from '../pages'
import Account from '../pages/profile';


// import NotFound from '../pages/notFound';
import HomeLayout from '../shared/HomeLayout';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
//
import DashboardApp from '../pages/DashboardApp';
import Products from '../pages/Products';
import Blog from '../pages/Blog';
import User from '../pages/User';
import NotFound from '../pages/Page404';



 const routes = [
    {
      path: "/admin",
      element:  <DashboardLayout />,
      children: [
        { element: <Navigate to="/admin/dashboard" replace /> },
        { path:"dashboard", element:<AdminDashboard />},
        {   path: "patients", 
            element: <AdminManagePatients/>,
            children: [{ path: ":id", element: <p>Patient Details</p>}]
         },
        {
          path: "physicians",
          element: <AdminManagePhysicians/>,
          children: [{ path: ":id", element: <p>phy1 </p> }],
        },
        { path: "appointments", element: <AdminManageAppointments/> },
        { path: "medical-data", element: <AdminMedicalData /> },
        { path: "billings", element: <p>Billings</p> }
      ]
    },
    {
      path: "/patient",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/patient/dashboard" replace /> }, 
        { path: 'dashboard', element: <PatientDashboard /> },
        {   path: "demographics", 
            element: <PatientDemographics/>,
            children: [{ path: ":id", element: <p>Patient Details</p>}]
         },
        {path:'allergies-immunizations',element:<PatientMedicationsAndAllergies/>},
        { path: "schedule-appointment", element: <PatientScheduleAppointments /> },
        { path: "appointments", element: <PatientAppointments/>},
        { path: "vitals", element: <p>Vitals</p> },
        { path: "education", element: <PatientEducation/> },
        { path: "immunizations", element: <PatientImmunizations/> }

      ]
    },
    {
      path: "/physician",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/physician/dashboard" replace /> },
        { path: 'dashboard', element: <PhysicianDashboard /> },
        {   path: "patients", 
            element:<PhysicianManagePatients/> ,
            children: [{ path: ":id", element: <p>Patient Details</p>}]
         },
        {
          path: "appointments",
          element: <PhysicianManageAppointments/>,
          children: [{ path: ":id", element: <p>Appointmenta </p> }],
        },
        { path: "reports", element: <p>Reports</p> },
        

      ]
    },
    { path: "/profile", element: <HomeLayout><Account/></HomeLayout> },
    { path: "/login", element: <LoginPage/> },
    { path: "/register", element: <RegisterPage/>},
    { path: "/forgot-password", element: <p>Forgot Password</p> },
    { path: "/invite" , element :<InviteUser/>},
    { path: "*", element: <NotFound /> },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <LoginPage /> },
        { path: 'register', element: <RegisterPage /> },
        { path: 'EmailVerificationForForgotPW', element: <EmailVerificationForForgotPW /> },
        { path: 'ForgotPassword', element: <ForgotPassword /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: "/FormDialogs", element: <FormDialogs></FormDialogs> },

]



export default function Router() {
  return useRoutes(routes);
}
