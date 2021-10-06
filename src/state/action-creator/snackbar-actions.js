export const toggleSnackbarOpen = (message) => {
  console.log("in snack actions",message)
    return (dispatch) => {
        dispatch({
            type: "TOGGLE_SNACKBAR_OPEN",
            payload: message
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
