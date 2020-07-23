export const getLogin = (api) => api.get(`/login`);
export const postLogin = (api, login, password) => api.post(`/login`, {
  email: login,
  password,
});
