import { Navigate, useRoutes } from "react-router-dom";
import {
  AdminMedicalData,
  AdminManagePhysicians,
  AdminManageAppointments,
  AdminManagePatients,
  AdminDashboard,
  PatientDashboard,
  PatientDemographics,
  PatientImmunizations,
  PatientAppointments,
  PatientMedicationsAndAllergies,
  PEducation,
  PatientScheduleAppointments,
  PatientVitals,
  PatientOrder,
  PhysicianDashboard,
  PhysicianManageAppointments,
  PhysicianManagePatients,
  PhysicianProfile,
  LoginPage,
  RegisterPage,
  ForgotPassword,
  InviteUser,
  Emp,
  FormDialogs,
} from "../pages";
import Account from "../pages/profile";
import { Settings } from "../components/Account/settings";
import { SelectSearch } from "../shared/SelectSearch";

import { MandA } from "../shared/MedicationsProceduresForm";
// import NotFound from '../pages/notFound';
import HomeLayout from "../shared/HomeLayout";
// layouts
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
//
import Checkout from "../components/Order/Checkout";

import NotFound from "../pages/Page404";
import { AppointmentDetails } from "../components/Admin/Appointments/AppointmentDetails";
import { AppointmentLayout } from "../pages/admin/ManageAppointment/index";
import { AdminScheduleAppointments } from "../pages/admin/scheduleAppointment";
import { Diagnosis } from "../shared/Diagnosis";
import { Home } from "../pages/Home";
const routes = [
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      { element: <Navigate to="/admin/dashboard" replace /> },
      { path: "dashboard", element: <AdminDashboard /> },
      {
        path: "patients",
        element: <AdminManagePatients />,
        children: [{ path: ":id", element: <p>Patient Details</p> }],
      },
      {
        path: "physicians",
        element: <AdminManagePhysicians />,
        children: [{ path: ":id", element: <p>phy1 </p> }],
      },
      {
        path: "appointments",
        element: <AppointmentLayout />,
        children: [
          { element: <Navigate to="/" replace /> },
          { path: "", element: <AdminManageAppointments /> },
          { path: "diagnosis", element: <Diagnosis /> },
          { path: ":id", element: <AppointmentDetails /> },
        ],
      },
      {
        path: "schedule-appointment",
        element: <AdminScheduleAppointments />,
      },
      { path: "medical-data", element: <AdminMedicalData /> },
      { path: "settings", element: <Settings /> },
      { path: "order", element: <PatientOrder /> },
    ],
  },
  {
    path: "/patient",
    element: <DashboardLayout />,
    children: [
      { element: <Navigate to="/patient/dashboard" replace /> },
      { path: "dashboard", element: <PatientDashboard /> },
      { path: "demographics", element: <PatientDemographics /> },
      {
        path: "allergies-immunizations",
        element: <PatientMedicationsAndAllergies />,
      },
      {
        path: "schedule-appointment",
        element: <PatientScheduleAppointments />,
      },
      {
        path: "appointments",
        element: <AppointmentLayout />,
        children: [
          { element: <Navigate to="/" replace /> },
          { path: "", element: <AdminManageAppointments /> },
          { path: ":id", element: <AppointmentDetails /> },
        ],
      },
      // { path: "appointments", element: <PatientAppointments/>},
      { path: "vitals", element: <p>Vitals</p> },
      { path: "education", element: <PEducation /> },
      { path: "immunizations", element: <PatientImmunizations /> },
      { path: "vitals", element: <PatientVitals /> },
      { path: "order", element: <PatientOrder /> },
      { path: "checkout", element: <Checkout /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "/physician",
    element: <DashboardLayout />,
    children: [
      { element: <Navigate to="/physician/dashboard" replace /> },
      { path: "dashboard", element: <PhysicianDashboard /> },
      {
        path: "patients",
        element: <AdminManagePatients />,
        children: [{ path: ":id", element: <p>Patient Details</p> }],
      },
      {
        path: "profile",
        element: <PhysicianProfile />,
        children: [{ path: ":id", element: <p>Patient Details</p> }],
      },
      {
        path: "appointments",
        element: <AppointmentLayout />,
        children: [
          { element: <Navigate to="/" replace /> },
          { path: "", element: <AdminManageAppointments /> },
          { path: ":id", element: <AppointmentDetails /> },
        ],
      },
      { path: "reports", element: <p>Reports</p> },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "/profile",
    element: (
      <HomeLayout>
        <Account />
      </HomeLayout>
    ),
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/forgot-password", element: <p>Forgot Password</p> },
  { path: "*", element: <NotFound /> },
  {
    path: "/",
    element: <LogoOnlyLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "invite", element: <InviteUser /> },
      { path: "ma", element: <MandA /> },
      { path: "search", element: <SelectSearch /> },
      { path: "404", element: <NotFound /> },
      { path: "/", element: <Home /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  { path: "/FormDialogs", element: <FormDialogs></FormDialogs> },
];

export default function Router() {
  return useRoutes(routes);
}
