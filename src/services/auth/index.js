import axios from "axios";
import { BASE_URL } from "../../constants";

const register = (payload) => {


  return axios.post(BASE_URL + "register",payload)
               .then((response) => {
                 return response.data
               })
               .catch(error=>{
                 console.log(error)

               })
                
              
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  getCurrentUser,
};