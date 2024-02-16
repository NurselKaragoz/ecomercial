export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const DECREASE_FROM_CART = "DECREASE_FROM_CART";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  productId,
});
console.log("shopcartaction", removeFromCart);
export const clearCart = () => ({ type: CLEAR_CART });
export const setPayment = (paymentInfo) => ({ type: SET_PAYMENT, paymentInfo });
export const setAddress = (addressInfo) => ({ type: SET_ADDRESS, addressInfo });
export const decreaseCart = (product) => ({
  type: DECREASE_FROM_CART,
  product,
});
