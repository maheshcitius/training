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
        console.log("data",response.data[0])
      
        return medicationAllergyArr;}
    })
    .catch(error=>{
        console.log("Error in get all medications",error)
    })
   

}

export const updateAllMedication = (payload) => {
    return axios.put(BASE_URL + "medicationAllergies",payload)
    .then((response) => {
        console.log(response.data)
      return response.data
    })
    .catch(error=>{
      console.log(error)

    })        
}
export const AddMedication = (payload) => {
    return axios.post(BASE_URL + "medicationAllergies/id",payload)
    .then((response) => {
        console.log(response.data)
      return response.data
    })
    .catch(error=>{
      console.log(error)

    })        
}

