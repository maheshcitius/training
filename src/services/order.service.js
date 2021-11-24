import axios from "axios";
import { BASE_URL, APPOINTMENT_BASE_URL } from "../constants/index";
import { authHeader, roleQuery, roleOrder } from "../helpers";

export const getPatientOrder = (patientId) => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return axios
    .get(BASE_URL + roleOrder("billings"), requestOptions)
    .then((response) => {
      let billings = response.data;
      if (billings) {
        localStorage.setItem("billings", JSON.stringify(billings));
      }
      return billings;
    })
    .catch((error) => {
      console.log("Error in get all order", error);
    });
};

export const addBilling = (appointmentId, payload) => {
  debugger;
  return axios.post(
    BASE_URL + `${APPOINTMENT_BASE_URL}${appointmentId}/billings`,
    payload
  );
};

export const updateBilling = (id, payload) => {
  console.log("inside UPDATE billing service");

  return axios.patch(BASE_URL + "billings/" + id, payload);
};
