import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader } from "../helpers";

export const getPatientMadicationsAndAllergies = () =>{

    const requestOptions = {
        method : 'GET' ,
        headers: authHeader()
    };

    return axios.get(BASE_URL+"medicationAllergies",requestOptions)
    
}

export const updatePatientMadicationsAndAllergies = (id,payload) => {

    return axios.patch(BASE_URL + "medicationAllergies/"+id,payload)
          
}


