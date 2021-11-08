import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader } from "../helpers";
import { userInformation } from "../services";

export const getPatientMadicationsAndAllergies = () =>{
    const UserInfo = userInformation.getCurrentUser();

    const requestOptions = {
        method : 'GET' ,
        headers: authHeader()
    };

    return axios.get(BASE_URL+"medicationAllergies?patientID="+UserInfo.user.id,requestOptions)
    
}

export const updatePatientMadicationsAndAllergies = (id,payload) => {

    return axios.patch(BASE_URL + "medicationAllergies/"+id,payload)
          
}
export const createPatientMadicationsAndAllergies = (payload) => {

    return axios.post(BASE_URL + "medicationAllergies/",payload)
          
}


