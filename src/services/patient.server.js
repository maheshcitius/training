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