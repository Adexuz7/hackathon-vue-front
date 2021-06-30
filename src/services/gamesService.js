import { api } from "./apiUrl";

export default {
  async getAllGames() {
    const response = await api.get("/games");
    return response.data;
  },
};
