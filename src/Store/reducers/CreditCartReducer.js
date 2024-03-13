import { ADD_CREDIT_CART } from "../Actions/CreditCartActions";
const initialState = {
  payment: {},
};

const creditCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CREDIT_CART:
      return {
        ...state,
        payment: action.payload,
      };

    default:
      return state;
  }
};

export default creditCartReducer;
