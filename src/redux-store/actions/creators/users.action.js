import { actionTypes } from "../action-types";
import { userInformation } from "../../../services";
import { toggleSnackbarOpen } from "./snackbar.action";

export const userActions = {
  getAllUsers,
  updateUser,
  deleteUser,
};

function getAllUsers() {
  console.log("In Get All Users");
  let payload = {
    allUsers: "",
    globalmessage: "",
  };
  return (dispatch) => {
    // dispatch(request());

    userInformation
      .getAll()
      .then((response) => {
        payload.allUsers = response.data;

        payload.physicians = response.data.filter(
          (user) => user.role && user.role.toLowerCase() === "physician"
        );
        payload.patients = response.data.filter(
          (user) => user.role && user.role.toLowerCase() === "patient"
        );

        payload.globalmessage = "Users Fetched successfully";

        dispatch(success(payload));
      })
      .catch((error) => {
        payload.globalmessage = "Failed to load users";
        dispatch(failure(payload));
      });
  };

  function request() {
    return { type: actionTypes.GETALL_REQUEST };
  }
  function success(payload) {
    return { type: actionTypes.GETALL_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: actionTypes.GETALL_FAILURE, payload };
  }
}

function updateUser(id, updatePayload) {
  let payload = {
    message: "",
    updatedUser: {},
  };
  return (dispatch) => {
    // dispatch(request());

    userInformation
      .updateUser(id, updatePayload)
      .then((response) => {
        payload.message = "User Updated";
        payload.updatedUser = response.data;
        dispatch(success(payload));
        dispatch(
          toggleSnackbarOpen({
            message: "Updated Successfully",
            type: "success",
          })
        );
      })
      .catch((error) => {
        payload.message = error.response.data;
        dispatch(failure(payload));
        dispatch(
          toggleSnackbarOpen({ message: "Failed to update", type: "warning" })
        );
      });
  };

  function request() {
    return { type: actionTypes.UPDATE_USER_REQUEST };
  }
  function success(payload) {
    return { type: actionTypes.UPDATE_USER_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: actionTypes.UPDATE_USER_FAILURE, payload };
  }
}

function deleteUser(id) {
  let payload = {
    message: "",
    updatedUser: {},
  };
  return (dispatch) => {
    // dispatch(request());

    userInformation
      .deleteUser(id)
      .then((response) => {
        payload.message = "User deleted";
        payload.userId = id;
        dispatch(success(payload));
        dispatch(
          toggleSnackbarOpen({
            message: "Deleted Successfully",
            type: "success",
          })
        );
      })
      .catch((error) => {
        payload.message = error.response.data;
        payload.userId = id;
        dispatch(failure(payload));
        dispatch(
          toggleSnackbarOpen({ message: "Failed to Delete", type: "warning" })
        );
      });
  };

  function request() {
    return { type: actionTypes.UPDATE_USER_REQUEST };
  }
  function success(payload) {
    return { type: actionTypes.UPDATE_USER_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: actionTypes.UPDATE_USER_FAILURE, payload };
  }
}
