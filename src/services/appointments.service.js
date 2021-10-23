import axios from "axios";
import { BASE_URL , GET_ALL_APPOINTMENTS , ADD_NEW_APPOINTMENT } from "../constants/index";
import { authHeader , roleQuery} from "../helpers";

 export const  getAllAppointments = () => {

    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(BASE_URL+roleQuery(GET_ALL_APPOINTMENTS), requestOptions)
    .then(response =>{
        console.log("services appointments data" , response.data)
        return response.data;
    })
    .catch(error=>{
        console.log("Error in get all appointments ",error)
    })
   
}


export const addAppointment = (payload) => {
  
  
    return axios.post(BASE_URL + ADD_NEW_APPOINTMENT ,payload)
                 .then((response) => {
                
                    return response.data;
                   
                 })
                 .catch(error=>{
                  
                   console.log(error)
  
                 })              
  };
