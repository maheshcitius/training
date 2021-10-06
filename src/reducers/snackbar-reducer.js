const initialState = {
    toggleSnackbar: false,
    message: null,
    type:'success'
  };
  
  export default function snackbarReducer(state = initialState, action) {
      console.log("in reducer",state +" : Actions",action)
    switch (action.type) {
      case "TOGGLE_SNACKBAR_OPEN": {
        return {
          ...state,
          toggleSnackbar: true,
          message: action.payload.message,
          type:action.payload.type
        };
      }
  
      case "TOGGLE_SNACKBAR_CLOSE": {
        return {
          ...state,
          toggleSnackbar: false,
          message: null
        };
      }
  
      default: {
        return state;
      }
    }
  }
  