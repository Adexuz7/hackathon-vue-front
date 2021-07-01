<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="game.cover">
      <v-card-title>
        <span class="title">{{ game.title }}</span>
      </v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      <v-row>
        <v-col>
          <span>{{ releaseDate }}</span>
        </v-col>
      </v-row>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <span>{{ game.description }}</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <span>Genre</span>
            </v-col>
            <v-col>
              <span>{{ genres }}</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <span>Platforms</span>
            </v-col>
            <v-col>
              <span>{{ platforms }}</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <span>PEGI</span>
            </v-col>
            <v-col>
              <span>{{ game.pegi }}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- <v-card-actions>
      <v-btn color="orange" text> Comment </v-btn>

      <v-btn color="orange" text> Share </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  name: "Game",
  props: {
    game: Object,
  },
  computed: {
    releaseDate: function () {
      return this.game.released.substring(0, 10);
    },
    genres: function () {
      return this.game.genre.join(", ");
    },
    platforms: function () {
      return this.game.platform.join(", ");
    },
  },
};
</script>

<style scoped>
.title {
  color: white;
  text-shadow: #000 0px 0px 1px,
    1px 1px 0 #000;
}
</style>

// alt image when game has no cover? src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"