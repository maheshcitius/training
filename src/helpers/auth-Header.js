import { getCurrentUser } from "../services/users.server";

export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}

export function roleQuery(url) {
  var userInfo = getCurrentUser();
  var newURL = url;
  if (userInfo?.user) {
    let user = userInfo.user;
    newURL =
      user.role == "admin"
        ? newURL
        : user.role == "patient"
        ? (newURL += "&patientId=" + user.id)
        : (newURL += "&physicianId=" + user.id);
  }
  console.log("user url", newURL);

  return newURL + "&_sort=appointments&_order=desc";
}

export function roleUsersQuery(url) {
  var userInfo = getCurrentUser();
  var newURL = url;
  if (userInfo?.user) {
    let user = userInfo.user;
    newURL =
      user.role == "admin"
        ? newURL
        : user.role == "patient"
        ? (newURL += "&role=physician")
        : (newURL += "&role=patient");
  }

  return newURL;
}

export const roleImmunization = (url) => {
  var userInfo = getCurrentUser();
  var newURL = url;
  if (userInfo?.user) {
    let user = userInfo.user;
    newURL =
      user.role == "admin"
        ? newURL
        : user.role == "patient"
        ? (newURL += "?patientId=" + user.id)
        : (newURL += "&role=patient");
  }

  return newURL;
};

export const roleOrder = (url) => {
  var userInfo = getCurrentUser();
  var newURL = url;
  if (userInfo?.user) {
    let user = userInfo.user;
    newURL =
      user.role == "admin"
        ? newURL
        : user.role == "patient"
        ? (newURL += "?patientId=" + user.id)
        : (newURL += "&role=patient");
  }

  return newURL;
};
