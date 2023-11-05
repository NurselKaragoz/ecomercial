import { SET_USER, UPDATE_USER, CLEAR_USER } from "../Actions/userActions";
const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.userData,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.updatedUserData,
        },
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
