import { combineReducers } from "redux";

import snackbarReducer from "./snackbar-reducer";
import FormDialogsReducer from "./FormDialogs-reducer";
import { authentication, registration } from "./auth.reducer";
import medicalDataReducer from "./medicaldata.reducer";
import appointmentsReducer from "./appointments.reducer";
import { medicationnReducer } from "./medication.reducer";
import { usersReducer } from "./users.reducer";
import { demographicsReducer } from "./demographics.reducer";
import { orderReducer } from "./order.reducer";
import { immunizationReducer } from "./immunizations.reducer";
import patientReducer from "./patientReducer";

const reducers = combineReducers({
  snack: snackbarReducer,
  authentication: authentication,
  registration: registration,
  FormDialogsReducer: FormDialogsReducer,
  medicalData: medicalDataReducer,
  appointments: appointmentsReducer,
  medication: medicationnReducer,
  allUsers: usersReducer,
  demographics: demographicsReducer,
  immunization: immunizationReducer,
  order: orderReducer,
  patientReducer: patientReducer,
});

export default reducers;
