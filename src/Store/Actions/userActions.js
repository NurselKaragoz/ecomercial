export const SET_NAME = "SET_NAME";
export const SET_EMAİL = "SET_EMAİL";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_ROLE = "SET_ROLE";

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};
export const setEmail = (email) => {
  return {
    type: SET_EMAİL,
    payload: email,
  };
};
export const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};
export const SetRole = (role) => {
  return {
    type: SET_ROLE,
    payload: role,
  };
};
