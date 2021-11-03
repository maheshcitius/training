import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader, roleQuery } from "../helpers";

export const getAllDemographics = () => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return axios.get(
    BASE_URL + roleQuery("demographics?_limit=1"),
    requestOptions
  );
};

export const postDemographics = (payload) => {
  return axios.post(BASE_URL + "demographics", payload);
};

export const getDemographicsById = (id) => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return axios
    .get(`${BASE_URL}/demographics/${id}`, requestOptions)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("Error in get  demographics based on id", error);
    });
};
export const deleteDemographicsById = (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };

  return axios
    .delete(`${BASE_URL}/demographics/${id}`, requestOptions)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("Error in deleting  demographics based on id", error);
    });
};

export const updateDemographicsById = (id, payload) => {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(),
  };

  return axios.patch(`${BASE_URL}demographics/${id}`, payload);
};

// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//     getAllDemographics,
//     postDemographics,
//     getDemographicsById,
//     updateDemographicsById,
//     deleteDemographicsById,
//   };
