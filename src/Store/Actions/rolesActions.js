export const FETCH_ROLES_REQUEST = "FETCH_ROLES_REQUEST";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILURE = "FETCH_ROLES_FAILURE";

export const fetchRolesRequest = () => ({ type: FETCH_ROLES_REQUEST });
export const fetchRolesSuccess = (roles) => ({
  type: FETCH_ROLES_SUCCESS,
  roles,
});
export const fetchRolesFailure = (error) => ({
  type: FETCH_ROLES_FAILURE,
  error,
});
export const getRolesIfNeeded = () => (dispatch, getState) => {
  const { roles } = getState().yourRolesReducer;

  if (roles.length > 0) {
    return;
  }

  dispatch(fetchRolesRequest());

  fetch("/api/roles")
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchRolesSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchRolesFailure(error));
    });
};
