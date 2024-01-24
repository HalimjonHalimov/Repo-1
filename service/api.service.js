import axios from "./axios.config";

const AuthService = {
  async getCurrentUser(){
    const response = await axios.get("/myself")
    return response
  }
};
export default AuthService;

