import axios from "axios";
import CryptoJS from "crypto-js";


export const signFunction = (key, secret) => {
  const method = "GET";
  const url = "https://0001.uz/myself";
  const body = "";
  const userSecret = "blackmagic1";
  const signStr = `${method}${url}${body}${userSecret}`;
  const sign = CryptoJS.MD5(signStr).toString();
  console.log(sign);
  if (typeof window !== 'undefined') {
    localStorage.setItem('key', key)
    localStorage.setItem('secret', secret)
    localStorage.setItem('sign', sign)
  }
};

axios.defaults.baseURL = "https://0001.uz";

axios.interceptors.request.use((config) => {
  config.headers.Key = "Blackmagic";
  config.headers.Secret = "MrBlack";
  config.headers.Sign = "91450883dc60b4d7d63bdb24444cd1bf";
  return config;
});

export default axios;
