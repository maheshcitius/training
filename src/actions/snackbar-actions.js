
export const toggleSnackbarOpen = (config) => {
    return (dispatch) => {
        dispatch({
            type: "TOGGLE_SNACKBAR_OPEN",
            payload: config
        });
    }
}
export const toggleSnackbarClose = () => {
  return (dispatch) => {
      dispatch({
          type: "TOGGLE_SNACKBAR_CLOSE",
      });
  }
}
