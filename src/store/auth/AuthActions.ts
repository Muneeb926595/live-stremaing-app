import { getRegisterUrl, loginUserUrl } from "../../api/Endpoint";
import { axiosInstance as axios } from "../../api/axios";
import { AuthActionTypes } from "../redux/actionTypes";
import { User } from "../../models/User";
import {StorageHelper} from '../../helpers';

export const submitRegister = (username, email, password, navigation) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.REGISTER_USER_START,
    });
    const request = {
      email: email,
      password: password,
      userName: username,
    };
    const url = getRegisterUrl();
    axios
      .post(url, request)
      .then((res) => {
        let { data } = res;
        if (
          data.accessToken &&
          data.accessToken !== "undefined" &&
          data._id &&
          data._id !== "undefined"
        ) {
          registerUserSuccess(dispatch, data, navigation);
        } else {
          registerUserFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        console.log(error.message);
        if (error.response.data === "Email Already Exist") {
          alert("Email Already Exist");
        } else if (error.response.data === "User Name Already Exist") {
          alert("User Name Already Exist");
        }
        registerUserFail(dispatch, "There was an error connection2");
      });
  };
};

const registerUserFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: AuthActionTypes.REGISTER_USER_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const registerUserSuccess = (dispatch, data, navigation) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + data.accessToken;
  StorageHelper.saveItem(StorageHelper.StorageKeys.USER_ID, data._id);
  StorageHelper.saveItem(
    StorageHelper.StorageKeys.Access_Token,
    data.accessToken,
  );
  dispatch({
    type: AuthActionTypes.REGISTER_USER_SUCCESS,
    payload: data,
  });
  navigation.navigate("LiveStreams");
};

export const submitLogin = (user: User, navigation: any) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.LOGIN_USER_START,
    });
    const request = {
      email: user.email,
      password: user.password,
    };
    const url = loginUserUrl();
    axios
      .post(url, request)
      .then((res) => {
        let { data } = res;
        if (
          data.accessToken &&
          data.accessToken !== "undefined" &&
          data._id &&
          data._id !== "undefined"
        ) {
          loginUserSuccess(dispatch, data, navigation);
        } else {
          loginUserFail(dispatch, "There was an error connection");
        }
      })
      .catch((error) => {
        console.log(error.message);
        if (error.response.data === "Email not found") {
          alert("Email not found");
        } else if (error.response.data === "Password is invalid!") {
          alert("Password is invalid!");
        }
        loginUserFail(dispatch, "There was an error connection2");
      });
  };
};
const loginUserFail = (dispatch, errorMessage) => {
  console.log(errorMessage);
  dispatch({
    type: AuthActionTypes.LOGIN_USER_FAIL,
    payload: {
      errorMessage,
    },
  });
};
const loginUserSuccess = (dispatch, data, navigation) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + data.accessToken;
  StorageHelper.saveItem(StorageHelper.StorageKeys.USER_ID, data._id);
  StorageHelper.saveItem(
    StorageHelper.StorageKeys.Access_Token,
    data.accessToken,
  );
  dispatch({
    type: AuthActionTypes.LOGIN_USER_SUCCESS,
    payload: data,
  });
  navigation.navigate("LiveStreams");
};