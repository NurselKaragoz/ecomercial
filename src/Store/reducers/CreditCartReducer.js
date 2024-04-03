import {
  ADD_CREDIT_CART,
  DELETE_CREDIT_CARD,
  GET_CREDIT_CARD,
} from "../Actions/CreditCartActions";
const initialState = {
  payment: [],
};

const creditCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CREDIT_CART:
      return {
        ...state,
        payment: [...state.payment, action.payload],
      };
    case GET_CREDIT_CARD:
      return {
        ...state,
        payment: action.payload,
      };
    case DELETE_CREDIT_CARD:
      return {
        ...state,
        payment: state.payment.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default creditCartReducer;
