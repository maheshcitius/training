import axios from "axios";
import { BASE_URL } from "../../constants/index";

export const register = (payload) => {
  console.log('inside register service')

  return axios.post(BASE_URL + "register",payload)
               .then((response) => {
                let user = response.data;
                if (user.accessToken) {
                  localStorage.setItem('user', JSON.stringify(user));
                 }
          
                  return user;
                 
               })
               .catch(error=>{
                 console.log('------------')
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
        localStorage.setItem('userVerified', JSON.stringify(user));
      }
      return user;
    })
    .catch(e=>{
      console.log("error",e)
    })
};


export const resetPassword = (nPW,oPW,uID,email) =>
{
    // console.log("In update user",nPW,oPW,uID,email)
    const payload={
      "email": email,
      "password":nPW
    }
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