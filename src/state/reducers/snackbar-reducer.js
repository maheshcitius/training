const initialState = {
    toggleSnackbar: false,
    snackbarMessage: null
  };
  
  export default function snackbarReducer(state = initialState, action) {
      console.log("in reducer",state +" : Actions",action)
    switch (action.type) {
      case "TOGGLE_SNACKBAR_OPEN": {
        return {
          ...state,
          toggleSnackbar: true,
          snackbarMessage: action.payload
        };
      }
  
      case "TOGGLE_SNACKBAR_CLOSE": {
        return {
          ...state,
          toggleSnackbar: false,
          snackbarMessage: null
        };
      }
  
      default: {
        return state;
      }
    }
  }
  