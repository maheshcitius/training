import { userConstants } from '../constants/index';
export const openFormDialog = (config) => {

    console.log("in form actions",config)
    return (dispatch) => {
        dispatch({
            type: userConstants.OPEN_FORM_DIALOG,
            payload: config
        });
    }
}
export const closeFormDialog = () => {
  return (dispatch) => {
      dispatch({
          type: userConstants.CLOSE_FROM_DIALOG,
      });
  }
}