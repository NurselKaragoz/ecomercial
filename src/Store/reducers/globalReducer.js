import { SET_ROLES } from "../Actions/GlobalActions";
import { SET_CATEGORIES } from "../Actions/GlobalActions";
import { SET_THEME } from "../Actions/GlobalActions";
import { SET_LANGUAGE } from "../Actions/GlobalActions";
const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
