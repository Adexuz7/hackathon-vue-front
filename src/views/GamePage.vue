<template>
  <v-container>
    <v-row justify="center" v-if="game">
      <v-col class="game-card">
        <Game :game="game" />
      </v-col>
    </v-row>

    <v-card v-if="game.comments" class="mx-auto" max-width="400" tile>
      <v-list-item
        three-line
        v-for="(comment, index) in game.comments"
        :key="index"
      >
        <v-list-item-content>
          <v-list-item-title>{{ comment.author }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ comment.comment }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{ comment.rate }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
import gamesService from "../services/gamesService";
import Game from "../components/Game.vue";

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
  },
  async mounted() {
    this.game = await gamesService.getOneGame(this.gameId);
  },
};
</script>
