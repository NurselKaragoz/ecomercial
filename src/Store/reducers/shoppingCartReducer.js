import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  DECREASE_FROM_CART,
} from "../Actions/shoppingCartActions";
const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].count += 1;

        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { count: 1, checked: true, product: action.payload },
          ],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.productId),
      };

    case DECREASE_FROM_CART:
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === action.product.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        if (updatedCart[existingItemIndex].count === 1) {
          updatedCart.splice(existingItemIndex, 1);
        } else {
          updatedCart[existingItemIndex].count -= 1;
        }

        return { ...state, cart: updatedCart };
      } else {
        return state;
      }

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
