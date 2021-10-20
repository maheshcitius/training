import axios from "axios";
import { BASE_URL } from "../constants/index";
import { authHeader } from "../helpers";

export const  getAllPhysicians = () => {
    console.log('physiciansdata----');
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return axios.get(BASE_URL+"users/?role=Physician", requestOptions)
    .then(response =>{
        let physiciansdata = response.data;
        console.log('physiciansdata----', physiciansdata);
        if(physiciansdata){
            return physiciansdata;
        }
        
    })
    .catch(error=>{
        console.log("Error in get all demographics",error)
    })
   
}

export const postPhysicians= (payload) => {
    return axios.post(BASE_URL + "demographics",payload)
    .then((response) => {
        console.log(response.data)
      return response.data
    })
    .catch(error=>{
      console.log(error)

    })        
}

export const  getPhysiciansById = (id) => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),

    };
    //http://localhost:3003/users/?role=Admin
    return axios.get(`${BASE_URL}/users/${id}`, requestOptions)
    .then(response =>{
        console.log(response.data);
        return response.data;
    })
    .catch(error=>{
        console.log("Error in get  demographics based on id",error)
    })
   
}
export const  deletePhysicianById = (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),

    };
    return axios.delete(`${BASE_URL}users/${id}`, requestOptions)
    .then(response =>{
        console.log(response.data);
        return response.data;
    })
    .catch(error=>{
        console.log("Error in deleting  Physicians based on id",error)
    })
   
}

export const  updatePhysicianById = (id) => {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),

    };

    return axios.put(`${BASE_URL}/users/${id}`, requestOptions)
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
    getAllPhysicians,
    postPhysicians,
    getPhysiciansById,
    updatePhysicianById,
    deletePhysicianById,
  };