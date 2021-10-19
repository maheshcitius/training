import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader } from "../helpers";

export const getAllMedication = () =>{

    const requestOptions = {
        method : 'GET' ,
        headers: authHeader()
    };

    return axios.get(BASE_URL+"medicationAllergies",requestOptions)
    .then(response =>{  
        if(response.data){      
        let medicationAllergyArr = response.data[0];
        console.log("data",response)
      
        return medicationAllergyArr;}
    })
    .catch(error=>{
        console.log("Error in get all medications",error)
    })
   

}