// Dummy auth file for structure
export const checkAuth = () => {
  return localStorage.getItem("token") ? true : false;
};
