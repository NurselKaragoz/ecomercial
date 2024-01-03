import axiosInstance from "../../Axios/axiosInstance";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL_PRODUCT_COUNT = "SET_TOTAL_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_PRODUCT = "SET_PRODUCT";

export const setTotalProductCount = (totalProductCount) => ({
  type: SET_TOTAL_PRODUCT_COUNT,
  payload: totalProductCount,
});
export const setProduct = (product) => ({
  type: SET_PRODUCT,
  payload: product,
});

export const setPageCount = (pageCount) => ({
  type: SET_PAGE_COUNT,
  payload: pageCount,
});
export const setActivePage = (activePage) => ({
  type: SET_ACTIVE_PAGE,
  payload: activePage,
});
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});
const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});

export const fetchProduct =
  (filter, category, sort, limit, offset) => (dispatch) => {
    const queryParams = new URLSearchParams();
    if (filter) queryParams.append("filter", filter);
    if (category) queryParams.append("category", category);
    if (limit) queryParams.append("limit", limit);
    if (offset) queryParams.append("offset", offset);
    if (sort) queryParams.append("sort", sort);

    axiosInstance
      .get(`/products?${queryParams.toString()}`)

      .then(function (response) {
        console.log("product data =>", response.data);

        dispatch(setProduct(response.data));
      })
      .catch(function (error) {
        console.log("product error", error);
      });
    console.log("query param", queryParams);
  };
