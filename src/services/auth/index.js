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


export const emailVerification = (email) => {
  return axios
    .get(BASE_URL + "users?email="+email)
    .then((response) => {
        let user = response.data;
      if (user.length>0) {
        localStorage.setItem('userVerified', JSON.stringify(user));
      }
      return user;
    })
    .catch(e=>{
      console.log("error",e)
    })
};


export const resetPassword = (details) =>
{
    // console.log("In update user",nPW,oPW,uID,email)
    const uID=details.userVerified;
    const payload=details;
    payload['id'] = payload['userVerified']; // Assign new key
    payload['password'] = payload['newPassword']; // Assign new key

    delete payload['userVerified']; 
    delete payload['newPassword']; 
    delete payload['oldPassword']; 

    
    const requestOptions = {
        method: 'PUT'
    };
    // console.log("URL",BASE_URL+"users/"+uID,payload,requestOptions)

    return axios.put(BASE_URL+"users/"+uID,payload,requestOptions)
                .then(response =>{
                    console.log("in then");
                    localStorage.setItem('PWChanged', JSON.stringify(response.data));
                    return response.data;
                })
                .catch(error=>{
                    console.log("Error in update user",error)
                })
}