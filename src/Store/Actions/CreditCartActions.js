import axiosInstance from "../../Axios/axiosInstance";

export const ADD_CREDIT_CART = "ADD_CREDIT_CART";

export const addCreditCart = () => {
  return (dispatch) => {
    axiosInstance
      .post(
        "/user/card",
        {},
        {
          headers: {
            Authorization: ` ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log("Adres", response.data);
        console.log("creditcartaction", response.data);
        dispatch({
          type: ADD_CREDIT_CART,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error("credit cart error", error);
      });
  };
};
