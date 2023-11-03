import {
  SET_EMAİL,
  SET_NAME,
  SET_PASSWORD,
  SET_ROLE,
  SET_CATEGORİES,
} from "../Actions/userActions";

const initialState = {
  name: [],
  email: [],
  password: [],
  role: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
    case SET_EMAİL:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        theme: action.payload,
      };

    case SET_ROLE:
      return {
        ...state,
        theme: action.payload,
      };
  }
};

export default userReducer;
