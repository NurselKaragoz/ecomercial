import axiosInstance from "../../Axios/axiosInstance";
import { toast } from "react-toastify";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const GET_ADDRESS = "GET_ADDRESS";
export const EDIT_ADDRESS = "EDIT_ADDRESS";
export const DECREASE_FROM_CART = "DECREASE_FROM_CART";
export const INCREASE_CART_ITEM = "INCREASE_CART_ITEM";
export const DELETE_ADDRESS = "DELETE_ADDRESS";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  productId,
});
export const clearCart = () => ({ type: CLEAR_CART });
export const setPayment = (paymentInfo) => ({ type: SET_PAYMENT, paymentInfo });
export const setAddressData = (payload) => ({
  type: SET_ADDRESS,
  payload,
});

export const setAddress = (postData) => {
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
        dispatch(setAddressData(response.data));
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
export const fetchAddress = () => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get("/user/address", {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      });
      console.log("Adres", response.data);
      dispatch(getAddress(response.data));
    } catch (error) {
      console.error("Adres formu başarısız", error);
    }
  };
};

export const editAddress = (newAddressData, id) => {
  const queryParams = new URLSearchParams();
  if (id) queryParams.append("id", id);
  return async (dispatch) => {
    try {
      const response = await axiosInstance.put(
        `/user/address?${queryParams.toString()}`,
        newAddressData,
        {
          headers: { Authorization: ` ${localStorage.getItem("token")}` },
        }
      );
      console.log("edited address", response.data);
      console.log("edited address1111", newAddressData);

      dispatch(updateAddress(newAddressData));
      toast.success("Adresiniz başarıyla güncellendi");
    } catch (error) {
      console.error("Adres düzenleme başarısız ", error);
      toast.error("Adresinizi güncellerken bir hata oluştu!");
    }
  };
};

export const updateAddress = (updatedAddress) => {
  return {
    type: EDIT_ADDRESS,
    updatedAddress,
  };
};

export const deleteAddress = (id) => {
  return async (dispatch) => {
    try {
      await axiosInstance.delete(`/user/address/${id}`, {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      });
      dispatch(clearAddress(id));
      toast.success("Adres başarıyla silindi");
    } catch (error) {
      console.error("Adres silme başarısız ", error);
      toast.error("Adresi silerken bir hata oluştu!");
    }
  };
};
export const clearAddress = (id) => ({ type: DELETE_ADDRESS, payload: id });
