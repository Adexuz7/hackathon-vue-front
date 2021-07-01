<template>
  <v-container>
    <v-row v-if="game">
      <v-col>
        <Game :game="game" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Comments :comments="game.comments" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gamesService from "../services/gamesService";
import Game from "../components/Game.vue";
import Comments from "../components/Comments.vue";

export default {
  name: "Games",
  data() {
    return {
      game: null,
    };
  },
  props: {
    gameId: String,
  },
  components: {
    Game,
    Comments,
  },
  async mounted() {
    this.game = await gamesService.getOneGame(this.gameId);
  },
};
</script>
