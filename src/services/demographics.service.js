import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader } from "../helpers";

export const  getAllDemographics = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(BASE_URL+"demographics", requestOptions)
    .then(response =>{
        let demographicsdata = response.data;
        if(demographicsdata){
            return demographicsdata;
        }
        
    })
    .catch(error=>{
        console.log("Error in get all demographics",error)
    })
   
}

export const postDemographics= (payload) => {
    return axios.post(BASE_URL + "demographics",payload)
    .then((response) => {
        console.log(response.data)
      return response.data
    })
    .catch(error=>{
      console.log(error)

    })        
}

export const  getDemographicsById = (id) => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),

    };

    return axios.get(`${BASE_URL}/demographics/${id}`, requestOptions)
    .then(response =>{
        console.log(response.data);
        return response.data;
    })
    .catch(error=>{
        console.log("Error in get  demographics based on id",error)
    })
   
}
export const  deleteDemographicsById = (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),

    };

    return axios.delete(`${BASE_URL}/demographics/${id}`, requestOptions)
    .then(response =>{
        console.log(response.data);
        return response.data;
    })
    .catch(error=>{
        console.log("Error in deleting  demographics based on id",error)
    })
   
}

export const  updateDemographicsById = (id) => {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),

    };

    return axios.put(`${BASE_URL}/demographics/${id}`, requestOptions)
    .then(response =>{
        console.log(response.data);
        return response.data;
    })
    .catch(error=>{
        console.log("Error in updating  demographics based on id",error)
    })
   
}

// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//     getAllDemographics,
//     postDemographics,
//     getDemographicsById,
//     updateDemographicsById,
//     deleteDemographicsById,
//   };