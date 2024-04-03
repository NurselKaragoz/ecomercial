import axiosInstance from "../../Axios/axiosInstance";
import { toast } from "react-toastify";

export const ADD_CREDIT_CART = "ADD_CREDIT_CART";
export const GET_CREDIT_CARD = "GET_CREDIT_CARD";
export const DELETE_CREDIT_CARD = "DELETE_CREDIT_CARD";

export const creditCart = (payment) => ({
  type: ADD_CREDIT_CART,
  payload: payment,
});

export const addCreditCart = (data) => {
  return async (dispatch) => {
    axiosInstance
      .post("/user/card", data, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("creditcartaction", response.data);
        dispatch(creditCart(response.data));
      })
      .catch((error) => {
        console.error("credit cart error", error);
      });
  };
};
export const fetchCreditCard = () => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get("user/card", {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      });
      console.log("Kredi kartı ", response.data);
      dispatch(getCreditCard(response.data));
    } catch (error) {
      console.error("Kredi kartı ekleme başarısız ", error);
    }
  };
};

export const getCreditCard = (data) => {
  return {
    type: GET_CREDIT_CARD,
    payload: data,
  };
};

export const deleteCreditCard = (id) => {
  return async (dispatch) => {
    try {
      await axiosInstance.delete(`/user/card/${id}`, {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      });
      dispatch(clearCreditCard(id));
      toast.success("Kredi Kartı başarıyla silindi");
    } catch (error) {
      console.error("Kredi kartı silme başarısız ", error);
      toast.error("Kredi kartını silerken bir hata oluştu!");
    }
  };
};
export const clearCreditCard = (id) => ({
  type: DELETE_CREDIT_CARD,
  payload: id,
});
