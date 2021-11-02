import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader } from "../helpers";

export const getPatientEducation = () =>{

    const requestOptions = {
        method : 'GET' ,
        headers: authHeader()
    };

    return axios.get(BASE_URL+"patientEducation",requestOptions)
    
}


