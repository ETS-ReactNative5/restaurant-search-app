import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";
import { REACT_APP_API_KEY } from "@env";

const API = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${REACT_APP_API_KEY}`,
  },
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.message);
    return Promise.reject(error);
  },
);

export default API;
