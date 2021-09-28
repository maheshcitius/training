import axios from "axios";
import { BASE_URL } from "../../constants";



const register = (username, email, password) => {
  return axios.post(BASE_URL + "users", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(BASE_URL + "users", {
      username,
      password,
    })
    .then((response) => {
    
      return response.data;
      
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};