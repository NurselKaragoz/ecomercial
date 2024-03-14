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
export const fetchCreditCard = axiosInstance
  .get("/user/card", {
    headers: {
      Authorization: ` ${localStorage.getItem("token")}`,
    },
  })
  .then((response) => {
    getCreditCard(response.data);
  })
  .catch((error) => {
    console.error("Creditcart başarısız", error);
  });
export const getCreditCard = (data) => {
  return {
    type: GET_CREDIT_CARD,
    payload: data,
  };
};
