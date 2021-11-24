import axios from "axios";
import {
  BASE_URL,
  GET_ALL_APPOINTMENTS,
  ADD_NEW_APPOINTMENT,
  APPOINTMENT_BASE_URL,
} from "../constants/index";
import { authHeader, roleQuery } from "../helpers";

export const getAllAppointments = () => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return axios
    .get(BASE_URL + roleQuery(GET_ALL_APPOINTMENTS))
    .then((response) => {
      console.log("services appointments data", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("Error in get all appointments ", error);
    });
};

export const addAppointment = (payload) => {
  console.log("in add appointment service");
  return axios.post(BASE_URL + ADD_NEW_APPOINTMENT, payload);
};

export const updateAppointment = (id, payload) => {
  console.log("inside UPDATE appointment service");

  return axios.patch(BASE_URL + APPOINTMENT_BASE_URL + id, payload);
};

export const deleteAppointment = (id) => {
  console.log("inside delete appointment service");

  return axios.delete(BASE_URL + APPOINTMENT_BASE_URL + id);
};
