import { userConstants } from '../../constants';

const initialState = {
    title: '',
    subtitle: '',
    openDilouge:false,
    FlagActionPatient:''
  };
  
  export default function FormDialogsReducer(state = initialState, action) {
    console.log("in reducer FormDialogsReducer",state +" : Actions",action)
    switch (action.type) {
      case userConstants.OPEN_FORM_DIALOG : {
        return {
          ...state,
          openDilouge: true,
          title: action.payload.title,
          subtitle:action.payload.subtitle,
          FlagActionPatient:action.payload.FlagActionPatient
        };
      }
  
      case userConstants.CLOSE_FROM_DIALOG: {
        return {
          ...state,
          openDilouge: false,
          title: null,
          subtitle:null
        };
      }

      case userConstants.Dilouge_SUCCESS:{
        return {
          ...state,
          openDilouge: false,
          title: null,
          subtitle:null,
          FlagActionPatient:null
        };
      }
      case userConstants.Dilouge_FAILURE:{
        return {
          ...state,
          openDilouge: false,
          title: null,
          subtitle:null,
          FlagActionPatient:null
        };
      }
  
      default: {
        return state;
      }
    }
  }
  