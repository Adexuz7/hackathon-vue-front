<template>
  <v-container>
    <v-row justify="center" v-if="games">
      <v-col v-for="(game, index) in games" :key="index" class="game-card">
        <Game :game="game" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gamesService from "../services/gamesService";
import Game from "../components/Game.vue";

export default {
  name: "Games",
  data() {
    return {
      games: null,
    };
  },
  components: {
    Game,
  },
  async mounted() {
    this.games = await gamesService.getAllGames();
  },
};
</script>
