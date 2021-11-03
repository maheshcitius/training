import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader,roleImmunization } from "../helpers";

export const  getAllImmunizations = () => {


    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(BASE_URL+roleImmunization("immunization"), requestOptions)
    .then(response =>{        
        let immunizationArr = response.data;
        if(immunizationArr){
            localStorage.setItem('immunization', JSON.stringify(immunizationArr));
        }
        return immunizationArr;
    })
    .catch(error=>{
        console.log("Error in get all immunizations",error)
    })
   
}

export const immunizationRecord = (payload) => {
    return axios.post(BASE_URL + "immunization",payload)
    .then((response) => {
        console.log(response.data)
      return response.data
    })
    .catch(error=>{
      console.log(error)

    })        
}

