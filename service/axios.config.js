import axios from "axios";

axios.defaults.baseURL = "https://0001.uz";

axios.interceptors.request.use((config) => {
  config.headers.Key = "Mason132";
  config.headers.Sign = "a04dfc0a2cad6d0665aedc00dcd29698";
  return config;
});

export default axios;
