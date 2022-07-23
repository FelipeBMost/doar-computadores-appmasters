import axios from "axios";

// Criando variável para a solicitação GET

const api = axios.create({
  baseURL: "https://doar-computador-api.herokuapp.com/",
});



api.interceptors.request.use(async config => {

  // Declaração de Token para teste

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9";

  if (token) {
    api.defaults.headers.authorization = `Portador ${token}`;
  }

  return config;
});

export default api;
