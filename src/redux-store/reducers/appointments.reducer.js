import { actionTypes } from "../actions/action-types";

const initialState = {
  appointments: [],
};

function appointmentsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_APPOINTMENTS_REQUEST:
      return {
        ...state,
        appointmentsRequest: "pending",
        appointments: [],
      };
    case actionTypes.GET_ALL_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        appointmentsRequest: "success",
        appointments: action.appointments,
      };

    case actionTypes.GET_ALL_APPOINTMENTS_FAILURE:
      return {
        ...state,
        appointmentsRequest: "failed",
      };
    case actionTypes.ADD_APPOINTMENTS_REQUEST:
      return {
        appointments: action.appointments,
      };
    case actionTypes.ADD_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        appointments: [...state.appointments, action.payload.appointment],
      };
    case actionTypes.ADD_APPOINTMENTS_FAILURE:
      return {
        ...state,
      };

    case actionTypes.UPDATE_APPOINTMENT_SUCCESS:
      const updatedData = state.appointments.map((x) =>
        x.id !== action.payload.id ? x : action.payload.updatedAppointment
      );

      // const index = state.appointments.findIndex(
      //   (item) => item.id !== action.payload.id
      // );
      // const newArray = [...state.appointments];
      // newArray[index] = action.payload.updatedAppointment;

      return {
        ...state,
        appointments: updatedData,
        updateAppointmentStatus: action.updatedAppointmentStatus,
      };

    case actionTypes.UPDATE_APPOINTMENT_FAILURE:
      return {
        ...state,
        updateAppointmentStatus: action.payload.updatedAppointmentStatus,
      };
    case actionTypes.DELETE_APPOINTMENT_SUCCESS:
      let filteredAppointments = state.appointments.filter(
        (item) => item.id !== action.id
      );

      return {
        ...state,
        appointments: filteredAppointments,
      };

    case actionTypes.DELETE_APPOINTMENT_FAILURE:
      return {
        ...state,
      };
    case actionTypes.ADD_DIAGNOSIS_VITALS_SUCCESS:
      const d = state.appointments.map((x) =>
        x.id !== action.payload.appointmentId
          ? x
          : x.patientVitals.push(action.payload.response)
      );
      debugger;
      return {
        ...state,
        appointments: d,
      };

    default:
      return state;
  }
}

export default appointmentsReducer;
