export const GET_ROLES = "GET_ROLES";

export const getRoles = (roles) => ({
  type: GET_ROLES,
  roles,
});

export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const roles = await fetchRolesFromAPI();
      dispatch(getRoles(roles));
    } catch (error) {}
  };
};
