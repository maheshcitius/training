
//export * from './auth/LoginComponent'

// Non Role Components
export { default as LoginPage } from './Login'
export { default as RegisterPage } from './Register'
export { default as NotFound } from './Page404'
export { default as ProfilePage } from './profile'
export * from './inviteUser'
export * from './EmailVerificationForForgotPW'
export * from  './ForgotPassword'

//Admin Pages
export { default as AdminDashboard } from './admin/dashboard'
export *  from './admin/managePatients'
export *   from './admin/managephysicians'
export *  from './admin/manageappointments'
export *   from './admin/medicaldata'

//Patient Pages

export { default as PatientDashboard } from './patient/dashboard'
export *   from './patient/demographics'
export * from './patient/immunizations'
export *  from './patient/medicationsAndAllergies'
export *  from './patient/appointments'
export *    from './patient/appointment-schedular'
export * from './patient/education'

//Physician

export { default as PhysicianDashboard } from './physician/dashboard'
export *  from './physician/appointments'
export *  from './physician/managepatient'

// Dilouge

export { default as FormDialogs} from '../shared/FormDialogs'