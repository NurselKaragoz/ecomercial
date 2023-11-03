import {
  SET_ADDRESS,
  SET_CART,
  SET_PAYMENT,
} from "../Actions/shoppingCartAction";

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_PAYMENT:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        theme: action.payload,
      };
  }
};

export default shoppingCartReducer;
