import {
  SET_PRODUCT_LIST,
  SET_TOTAL_PRODUCT_COUNT,
  SET_PAGE_COUNT,
  SET_ACTIVE_PAGE,
  SET_FETCH_STATE,
} from "../Actions/productActions";
const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: "NOT_FETCHED",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.productList,
      };
    case SET_TOTAL_PRODUCT_COUNT:
      return {
        ...state,
        totalProductCount: action.totalProductCount,
      };
    case SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: action.pageCount,
      };
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.activePage,
      };
    case SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.fetchState,
      };
    default:
      return state;
  }
};

export default productReducer;
