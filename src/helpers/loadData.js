import React , {  useEffect } from 'react'
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { allUsersAction , appointmentsActions } from '../redux-store/actions';


  
 export const LoadData= () => {

    const dispatch    = useDispatch();
    const { getAllUsers   } = bindActionCreators(allUsersAction, dispatch);
    const { getAppointments   } = bindActionCreators(appointmentsActions, dispatch);

    useEffect(() => {
       
        getAllUsers();
        getAppointments();

    }, [])

   
}

