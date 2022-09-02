import axios from "axios";

const mlInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 5000,
});

// TODO: manejo de errores desde el backend (Modal o redireccion)
mlInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 400) {
      console.log("respondió 400");
    }
    if (error.response.status === 401) {
      console.log("respondió 401");
    }
    if (error.response.status === 403) {
      console.log("respondió 403");
    }
    if (error.response.status === 404) {
      console.log("respondió 404");
    }
    if (error.response.status === 405) {
      console.log("respondió 405");
    }
    if (error.response.status === 204) {
      console.log("respondió 204");
    }
    return Promise.reject(error);
  }
);

export default mlInstance;
