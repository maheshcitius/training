import axios from "axios";
import { BASE_URL, ADD_DIAGNOSIS_DETAILS } from "../constants/index";
import { authHeader, roleQuery } from "../helpers";

export const addDiagnosisMedications = (appointmentId, payload) => {
  return axios.post(BASE_URL + ADD_DIAGNOSIS_DETAILS + "/medication", payload);
};
export const addDiagnosisVitals = (appointmentId, payload) => {
  return axios.post(
    BASE_URL + ADD_DIAGNOSIS_DETAILS + appointmentId + "/medication",
    payload
  );
};
