import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader } from "../helpers";

export const  getPatientOrder = () => {


    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(BASE_URL+"billings", requestOptions)
    .then(response =>{        
        let billings = response.data;
        if(billings){
            localStorage.setItem('billings', JSON.stringify(billings));
        }
        return billings;
    })
    .catch(error=>{
        console.log("Error in get all order",error)
    })
   
}


