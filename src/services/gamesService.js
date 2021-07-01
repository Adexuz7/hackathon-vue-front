import { api } from "./apiUrl";

export default {
  async getAllGames() {
    const response = await api.get("/games");
    return response.data;
  },
  async getOneGame(gameId) {
    const response = await api.get(`/games/${gameId}`);
    return response.data;
  },
};
