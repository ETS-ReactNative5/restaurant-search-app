import axios from "axios";
import Config from "react-native-config";

const API = axios.create({
  baseURL: Config.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${Config.API_KEY}`,
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
