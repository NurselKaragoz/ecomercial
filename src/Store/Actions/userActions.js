export const SET_USER = "SET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const CLEAR_USER = "CLEAR_USER";

export const setUser = (userData) => ({ type: SET_USER, userData });
export const updateUser = (updatedUserData) => ({
  type: UPDATE_USER,
  updatedUserData,
});
export const clearUser = () => ({ type: CLEAR_USER });
