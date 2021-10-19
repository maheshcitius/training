import axios from "axios";
import { BASE_URL , GET_ALL_ALLERGIES , GET_ALL_MEDICATIONS } from "../constants/index";
import { authHeader } from "../helpers";

 export const  getAllAllergies = () => {


    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(BASE_URL+GET_ALL_ALLERGIES, requestOptions)
    .then(response =>{
        console.log("services medical data" , response.data)
        return response.data;
    })
    .catch(error=>{
        console.log("Error in get all allergies ",error)
    })
   
}

 export const  getAllMedications = () => {


    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(BASE_URL+GET_ALL_MEDICATIONS, requestOptions)
    .then(response =>{
        return response.data;
    })
    .catch(error=>{
        console.log("Error in get all users",error)
    })
   
}



