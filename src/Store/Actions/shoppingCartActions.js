export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

export const addToCart = (product, count) => ({
  type: ADD_TO_CART,
  product,
  count,
});
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  productId,
});
export const clearCart = () => ({ type: CLEAR_CART });
export const setPayment = (paymentInfo) => ({ type: SET_PAYMENT, paymentInfo });
export const setAddress = (addressInfo) => ({ type: SET_ADDRESS, addressInfo });
