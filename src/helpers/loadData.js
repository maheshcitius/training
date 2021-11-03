import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { userActions, appointmentsActions } from "../redux-store/actions";

export const LoadData = () => {
  const dispatch = useDispatch();
  const { getAllUsers } = bindActionCreators(userActions, dispatch);
  const { getAppointments } = bindActionCreators(appointmentsActions, dispatch);

  useEffect(() => {
    getAllUsers();
    getAppointments();
  }, []);
};
