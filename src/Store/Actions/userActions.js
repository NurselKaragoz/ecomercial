import { toast } from "react-toastify";
import axiosInstance from "../../Axios/axiosInstance";
import { axiosWithAuth } from "../../companents/axiosWithAuth";

// ActionTypes
const SET_USER_DATA = "SET_USER_DATA";
const CLEAR_USER_DATA = "CLEAR_USER_DATA";

export const userConst = {
  SET_USER_DATA,
  CLEAR_USER_DATA,
};

// Action Creators

const setUserData = (payload) => ({ type: userConst.SET_USER_DATA, payload });
const clearUserData = () => ({ type: userConst.CLEAR_USER_DATA });

const fetchLoginUser = (loginData, history) => {
  return async (dispatch) => {
    axiosInstance
      .post("/login", loginData)
      .then((res) => {
        console.log("login result success: ", res);
        dispatch(setUserData(res.data)); //gelen veriyi dispatch et
        history.push("/home");
        localStorage.setItem("token", res.data.token);
        console.log("token", res.data.token);
        toast.success(" Welcome");
      })
      .catch((err) => {
        toast.error("Password is not correct");
        console.log("login result err: ", err);
        // dispatch(
        //   userAction.setUserData({
        //     userName: "nursel",
        //     token: "sagdjagsdjgajsgfjsdgbfcgfjsgksfgdsjkf",
        //   })
        // );
        // history.push("/home");
      });
  };
};

const autoLogin = () => (dispatch) => {
  axiosWithAuth()
    .get("/verify")
    .then(function (response) {
      dispatch(setUserData(response.data));
    })
    .catch(function (error) {
      console.log(error);
      localStorage.setItem("token", "");
    });
};

export const userAction = {
  setUserData,
  clearUserData,
  fetchLoginUser,
  autoLogin,
};
