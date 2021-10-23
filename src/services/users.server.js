import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader ,roleUsersQuery } from "../helpers";

export const  getAll = () => {

    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(BASE_URL+roleUsersQuery('users?'), requestOptions)
    
}

export const updateUser = (id,payload) =>
{
    console.log("In update user",payload)
    
    const requestOptions = {
        method: 'PATCH',
        headers: authHeader()   
    };

    return axios.patch(BASE_URL+"users/"+id,payload ,requestOptions)
    
}

export const getCurrentUser = () => {
    return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : '';
};
