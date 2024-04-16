import axiosInstance from "../../Axios/axiosInstance";
import { toast } from "react-toastify";

export const ADD_CREDIT_CART = "ADD_CREDIT_CART";
export const GET_CREDIT_CARD = "GET_CREDIT_CARD";
export const DELETE_CREDIT_CARD = "DELETE_CREDIT_CARD";
export const EDIT_CREDIT_CARD = "EDIT_CREDIT_CARD";

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
export const addOrUpdateCreditCard = (data, id) => {
  return async (dispatch) => {
    try {
      let response;
      let url;
      let toastMessage;

      if (id) {
        response = await axiosInstance.put(`/user/card/${id}`, data, {
          headers: { Authorization: ` ${localStorage.getItem("token")}` },
        });
        url = "user/card";
        toastMessage = "Kredi Kartı başarıyla güncellendi";
      } else {
        response = await axiosInstance.post("/user/card", data, {
          headers: { Authorization: ` ${localStorage.getItem("token")}` },
        });
        url = "user/card";
        toastMessage = "Kredi Kartı başarıyla eklendi";
      }

      dispatch(updateOrAddCreditCard(response.data));
      toast.success(toastMessage);
    } catch (error) {
      console.error("İşlem başarısız ", error);
      toast.error("İşlem sırasında bir hata oluştu!");
    }
  };
};

export const updateOrAddCreditCard = (cardData) => {
  if (cardData.id) {
    return {
      type: EDIT_CREDIT_CARD,
      updatedCard: cardData,
    };
  } else {
    return {
      type: ADD_CREDIT_CART,
      payload: cardData,
    };
  }
};
