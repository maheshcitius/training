import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader ,roleUsersQuery } from "../helpers";

export const  getAll = () => {

    console.log("in get all service")
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    console.log(`${BASE_URL}`)

    return axios.get(BASE_URL+roleUsersQuery('users?'), requestOptions)
    
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
        console.log("resp",response)
        return response.data;
    })
    .catch(error=>{
        console.log("Error in update user",error)
    })
}

export const getCurrentUser = () => {
    return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : '';
};

// eslint-disable-next-line import/no-anonymous-default-export
// export const userInformation = {
//     getCurrentUser,
//     getAll,   
//     updateUser 
//   };