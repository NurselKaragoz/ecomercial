import axiosInstance from "../../Axios/axiosInstance";
import { axiosWithAuth } from "../../companents/axiosWithAuth";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_CATEGORIES = "SET_CATEGORIES";

export const setRoles = (roles) => {
  return {
    type: SET_ROLES,
    payload: roles,
  };
};

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};

export const setCategories = (data) => {
  return {
    type: SET_CATEGORIES,
    payload: data,
  };
};

export const fetchCategories = () => (dispatch) => {
  axiosInstance
    .get("/categories")
    .then(function (response) {
      console.log("categories=>", response.data);
      dispatch(setCategories(response.data));
    })
    .catch(function (error) {
      console.log("categores error =>", error);
    });
};
export const fetchRoles = () => (dispatch) => {
  axiosWithAuth()
    .get("/roles")
    .then(function (response) {
      dispatch(setRoles(response.data));
      console.log("roles", response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
