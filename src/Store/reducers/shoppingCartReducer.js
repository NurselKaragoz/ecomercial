import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../Actions/shoppingCartActions";
const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { count: action.count, product: action.product }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.productId),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case SET_PAYMENT:
      return {
        ...state,
        payment: action.paymentInfo,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.addressInfo,
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
