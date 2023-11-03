import {
  SET_STOREIBANNO,
  SET_STORENAME,
  SET_STORETAXNO,
} from "../Actions/storeActions";

const initialState = {
  storeName: "",
  storeTaxNo: "",
  storeIbanNo: "",
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORENAME:
      return {
        ...state,
        theme: action.payload,
      };

    case SET_STORETAXNO:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_STOREIBANNO:
      return {
        ...state,
        theme: action.payload,
      };
    default:
  }
};

export default storeReducer;
