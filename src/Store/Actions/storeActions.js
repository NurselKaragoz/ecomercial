export const SET_STORENAME = "SET_STORENAME";
export const SET_STORETAXNO = " SET_TAXNO";
export const SET_STOREIBANNO = "SET_IBANNO";

export const setStoreName = (storeName) => {
  return {
    type: SET_STORENAME,
    payload: storeName,
  };
};
export const setTaxNo = (taxNo) => {
  return {
    type: SET_STORETAXNO,
    payload: taxNo,
  };
};

export const setIbanNo = (ibanNo) => {
  return {
    type: SET_STOREIBANNO,
    payload: ibanNo,
  };
};
