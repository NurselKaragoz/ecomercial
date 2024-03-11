import axiosInstance from "../../Axios/axiosInstance";
import { toast } from "react-toastify";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const GET_ADDRESS = "GET_ADDRESS";

export const DECREASE_FROM_CART = "DECREASE_FROM_CART";
export const INCREASE_CART_ITEM = "INCREASE_CART_ITEM";

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
export const setAddressData = (payload) => ({
  type: SET_ADDRESS,
  payload,
});
console.log("actionadress", setAddressData);
export const setAddress = (postData) => {
  console.log("adressfromform1111", postData);

  return async (dispatch) => {
    axiosInstance
      .post("/user/address", postData, {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("Adres1111", response.data);
        toast.success("Adresiniz başarıyla eklendi");
        dispatch(setAddressData(response.data)); // response.data kullanılmalı
      })
      .catch((error) => {
        console.error("Adres formu başarısız", error);
        toast.error("Adresinizi kaydetmek için giriş yapmalısınız!");
      });
  };
};

export const decreaseCart = (product) => ({
  type: DECREASE_FROM_CART,
  product,
});

export const increaseCart = (product) => ({
  type: INCREASE_CART_ITEM,
  product,
});
export const getAddress = (data) => {
  return {
    type: GET_ADDRESS,
    payload: data,
  };
};
export const fetchAddress = axiosInstance
  .get("/user/address", {
    headers: {
      Authorization: ` ${localStorage.getItem("token")}`,
    },
  })
  .then((response) => {
    console.log("Adres", response.data);
    getAddress(response.data);
    console.log("shopAdress2222", response.data);
  })
  .catch((error) => {
    console.error("Adres formu başarısız", error);
  });
