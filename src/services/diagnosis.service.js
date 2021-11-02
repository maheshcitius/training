import axios from "axios";
import { BASE_URL, APPOINTMENT_BASE_URL } from "../constants/index";
import { authHeader, roleQuery } from "../helpers";

export const addDiagnosis = (appointmentId, type, payload) => {
  return axios.post(
    BASE_URL + `${APPOINTMENT_BASE_URL}${appointmentId}/${type}`,
    payload
  );
};

export const updateDiagnosis = (id, type, payload) => {
  return axios.patch(BASE_URL + `${BASE_URL}${type}/${id}`, payload);
};
