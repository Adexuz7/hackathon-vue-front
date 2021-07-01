<template>
  <v-container>
    <v-row v-if="games">
      <v-col v-for="(game, index) in games" :key="index">
        <router-link
          :to="{
            name: 'GamePage',
            params: {
              gameId: game._id,
            },
          }"
        >
          <GameCard :game="game" />
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gamesService from "../services/gamesService";
import GameCard from "../components/GameCard.vue";

export default {
  name: "Games",
  data() {
    return {
      games: null,
    };
  },
  components: {
    GameCard,
  },
  async mounted() {
    this.games = await gamesService.getAllGames();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
