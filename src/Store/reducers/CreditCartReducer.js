import {
  ADD_CREDIT_CART,
  DELETE_CREDIT_CARD,
  GET_CREDIT_CARD,
  EDIT_CREDIT_CARD,
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
    case EDIT_CREDIT_CARD:
      const updatedCardIndex = state.card.findIndex(
        (card) => card.id === action.cardId
      );

      if (updatedCardIndex !== -1) {
        const updatedCardList = [...state.card];
        updatedCardList[updatedCardIndex] = action.newCardInfo;

        return {
          ...state,
          address: updatedCardList,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default creditCartReducer;
