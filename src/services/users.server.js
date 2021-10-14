import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader } from "../helpers";

export const  getAll = () => {


    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(BASE_URL+"users", requestOptions)
    .then(response =>{
        return response.data;
    })
    .catch(error=>{
        console.log("Error in get all users",error)
    })
   
}

export const updateUser = (id,payload) =>
{
    console.log("In update user",payload)
    
    const requestOptions = {
        method: 'PUT',
        headers: authHeader()   
    };

    return axios.put(BASE_URL+"users/"+id,payload ,requestOptions)
    .then(response =>{
        return response.data;
    })
    .catch(error=>{
        console.log("Error in update user",error)
    })
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

// eslint-disable-next-line import/no-anonymous-default-export
// export const userInformation = {
//     getCurrentUser,
//     getAll,   
//     updateUser 
//   };