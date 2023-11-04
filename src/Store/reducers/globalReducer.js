import {
  SET_LANGUAGE,
  SET_ROLES,
  SET_CATEGORİES,
  SET_THEME,
} from "../Actions/GlobalActions";
const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SET_CATEGORİES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
export default globalReducer;
