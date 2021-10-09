import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader } from "../helpers";

const  getAllDemographics = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(BASE_URL+"demographics", requestOptions)
    .then(response =>{
        console.log(response.data);
        return response.data;
    })
    .catch(error=>{
        console.log("Error in get all demographics",error)
    })
   
}

const postDemographics= (payload) => {
    return axios.post(BASE_URL + "demographics",payload)
    .then((response) => {
      return response.data
    })
    .catch(error=>{
      console.log(error)

    })        
}

const  getDemographicsById = (id) => {
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
const  deleteDemographicsById = (id) => {
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

const  updateDemographicsById = (id) => {
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
export default {
    getAllDemographics,
    postDemographics,
    getDemographicsById,
    updateDemographicsById,
    deleteDemographicsById,
  };