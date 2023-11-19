import axiosInstance from "../../Axios/axiosInstance";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL_PRODUCT_COUNT = "SET_TOTAL_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_PRODUCT = "SET_PRODUCT";

export const setTotalProductCount = (totalProductCount) => ({
  type: SET_TOTAL_PRODUCT_COUNT,
  totalProductCount,
});
export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    payload: product,
  };
};

export const setPageCount = (pageCount) => ({
  type: SET_PAGE_COUNT,
  pageCount,
});
export const setActivePage = (activePage) => ({
  type: SET_ACTIVE_PAGE,
  activePage,
});
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  fetchState,
});
const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  productList,
});
export const fetchProduct = () => (dispatch) => {
  axiosInstance
    .get("/products")

    .then(function (response) {
      console.log("product data =>", response);

      dispatch(setProduct(response.data));
    })
    .catch(function (error) {
      console.log("product error", error);
    });
};
