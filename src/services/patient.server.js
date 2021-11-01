import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader } from "../helpers";


export const  deletePatientByIdService = (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),

    };
    return axios.delete(`${BASE_URL}users/${id}`, requestOptions)
    .then(response =>{
        console.log(response.data);
        return response.data;
    })
    .catch(error=>{
        console.log("Error in deleting  Patient based on id",error)
    })
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


export const getPatientDemographics = (pId) =>
{
    console.log("demographics",BASE_URL + "demographics?patientId="+pId);
    const requestOptions = {
        method: 'GET',
        headers: authHeader()   
    };
    return axios
    .get(BASE_URL + "demographics?patientId="+pId)
    .then((response) => {
        return response;
    })
    .catch(e=>{
      console.log("error",e)
    })
}


export const getPatientImmunization = (pId) =>
{
    console.log("immunization",BASE_URL + "immunization?patientId="+pId);
    const requestOptions = {
        method: 'GET',
        headers: authHeader()   
    };
    return axios
    .get(BASE_URL + "immunization?patientId="+pId,requestOptions)
    .then((response) => {
        console.log("response",response)
        return response;
    })
    .catch(e=>{
      console.log("error",e)
    })
}