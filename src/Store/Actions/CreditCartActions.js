import axiosInstance from "../../Axios/axiosInstance";

export const ADD_CREDIT_CART = "ADD_CREDIT_CART";
export const GET_CREDIT_CARD = "GET_CREDIT_CARD";

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
export const getCreditCard = (data) => {
  return {
    type: GET_CREDIT_CARD,
    payload: data,
  };
};
export const fetchCreditCard = (dispatch) => {
  return async () => {
    axiosInstance
      .get("/user/card", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        dispatch(getCreditCard(response.data));

        console.log("kredi kartı okuma", response.data);
      })
      .catch((error) => {
        console.error("credit cart error", error);
      });
  };
};
