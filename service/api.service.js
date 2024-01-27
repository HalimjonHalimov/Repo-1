import axios from "axios";
import CryptoJS from "crypto-js";

const fetchingData = async () => {
  try {
    const response = await axios.get("https://0001.uz/myself", {
      headers: {
        "Content-Type": "application/json, utf-8",
        Key: "Blackmagic",
        Sign: "91450883dc60b4d7d63bdb24444cd1bf",
      },
    });
    console.log(response);
  } catch (error) {
    console.log("Error", error);
  }
};

const AuthService = {
  async getAuthSignup(data) {
    // const response = await axios.post("https://0001.uz/signup", data, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // });
    // return response;
    if (typeof window !== "undefined") {
      localStorage.setItem("key", data.key);
      localStorage.setItem("secret", data.secret);
    }
    return data;
  },
  async getAuthSignin(data) {
    // const response = await axios.get("https://0001.uz/myself", {
    //   headers: {
    // 'Content-Type': 'application/json',
    //     "Key": "key",
    //     "Sign": "sign",
    //     "Secret": "secret"
    //   }
    // });
    // return response;
    // const key = localStorage.getItem("key");
    // const secret = localStorage.getItem("secret");
    // const sign = fetchingSign("GET", "https://0001.uz/myself", "", secret )
    // if (typeof window !== "undefined") {
    //   localStorage.setItem("sign", sign);
    // }
    const key = data.password;
    const secret = data.username;
    const sign = fetchingSign("GET", "https://0001.uz/myself", "", secret);
    if (typeof window !== "undefined") {
      localStorage.setItem("key", key);
      localStorage.setItem("secret", secret);
      localStorage.setItem("sign", sign);
    }
    return sign;
  },
  async getCurrentUser() {
    // const response = await axios.get("https://0001.uz/myself", {
    //   headers: {
    // 'Content-Type': 'application/json',
    //     "Key": "key",
    //     "Sign": "sign",
    //     "Secret": "secret"
    //   }
    // });
    // return response;
    const key = localStorage.getItem("key");
    const secret = localStorage.getItem("secret");
    const sign = fetchingSign("GET", "https://0001.uz/myself", "", secret);
    if (typeof window !== "undefined") {
      localStorage.setItem("sign", sign);
    }
    return sign;
  },
};
export default AuthService;

const fetchingSign = (method, url, body, secret) => {
  const signStr = `${method}${url}${body}${secret}`;
  const sign = CryptoJS.MD5(signStr).toString();
  return sign;
};
