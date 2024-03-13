import { ADD_CREDIT_CART, GET_CREDIT_CARD } from "../Actions/CreditCartActions";
const initialState = {
  payment: {},
};

const creditCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CREDIT_CART:
      return {
        ...state,
        payment: action.paymentInfo,
      };
    case GET_CREDIT_CARD:
      return {
        ...state,
        payment: action.paymentInfo,
      };

    default:
      return state;
  }
};

export default creditCartReducer;
