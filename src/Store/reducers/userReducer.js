import { userConst } from "../Actions/userActions.js";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userConst.SET_USER_DATA:
      return payload;

    case userConst.CLEAR_USER_DATA:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
