export const SET_PRODUCTLİST = "SET_PRODUCTLİST";
export const SET_TOTALPRODUCTCOUNT = "SET_PRODUCTCOUNT";
export const SET_PAGECOUNT = "SET_PAGECOUNT";
export const SET_ACTİVEPAGE = "SET_ACTİVEPAGE";
export const SET_FETCHSTATE = "SET_FETCHSTATE";

export const setProductList = (productList) => {
  return {
    type: SET_PRODUCTLİST,
    payload: productList,
  };
};
export const setTotalProductCount = (totalProductCount) => {
  return {
    type: SET_TOTALPRODUCTCOUNT,
    payload: totalProductCount,
  };
};
export const setPageCount = (pageCount) => {
  return {
    type: SET_PAGECOUNT,
    payload: pageCount,
  };
};

export const setActivePage = (activePage) => {
  return {
    type: SET_ACTİVEPAGE,
    payload: activePage,
  };
};
export const setFetchState = (fetchState) => {
  return {
    type: SET_FETCHSTATE,
    payload: fetchState,
  };
};
