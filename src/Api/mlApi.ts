import axios from "axios";

const mlInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 5000,
});

export default mlInstance;