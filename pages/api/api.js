

import axios from "axios";

const api = axios.create({
  baseURL: "https://doar-computador-api.herokuapp.com/",
});



api.interceptors.request.use(async config => {
  // DECLARAÇÃO DE TOKEN PARA TESTE //
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9";

  if (token) {
    api.defaults.headers.authorization = `Portador ${token}`;
  }

  return config;
});

export default api;
