import { api } from "./apiUrl";

export default {
  async signup(name, email, password, birth) {
    const response = await api.post("/auth/signup", {
      name: name,
      email: email,
      password: password,
      birth: birth,
    });
    return response;
  },
  async login(email, password) {
    const response = await api.post("/auth/login", {
      email: email,
      password: password,
    });
    return response.data;
  },
};