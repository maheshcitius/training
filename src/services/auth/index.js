import axios from "axios";
import { BASE_URL } from "../../constants/index";

export const register = (payload) => {

  return axios.post(BASE_URL + "register",payload)
                         
};

export const login = (username, password) => {
  return axios
    .post(BASE_URL + "login", {
      "email":username,
      "password":password,
    })
    
};

export const logout = () => {
  localStorage.removeItem("user");
};



