import axios from "axios";
import { BASE_URL } from "../../constants/index";

export const register = (payload) => {


  return axios.post(BASE_URL + "register",payload)
               .then((response) => {
                 return response.data
               })
               .catch(error=>{
                 console.log(error)

               })              
};

export const login = (username, password) => {
  return axios
    .post(BASE_URL + "login", {
      "email":username,
      "password":password,
    })
    .then((response) => {
        let user = response.data;
      if (user.accessToken) {
        localStorage.setItem('user', JSON.stringify(user));
       }

      return user;
 
    })
    .catch(e=>{
      console.log("error",e)
    })
};

export const logout = () => {
  console.log("in user auth service logout")
  localStorage.removeItem("user");
};


export const emailVerification = (email) => {
  return axios
    .get(BASE_URL + "users?email="+email)
    .then((response) => {
        let user = response.data;
      if (user.length>0) {
        localStorage.setItem('user', JSON.stringify(user));
       }

    return user;
 
    })
    .catch(e=>{
      console.log("error",e)
    })
};



