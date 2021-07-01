<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="game.cover">
      <!-- alt image when game has no cover? src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" -->
      <v-card-title>
        <span class="title">{{ game.title }}</span>
      </v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    game: Object,
  },
};
</script>

<style scoped>
.title {
  color: white;
  text-shadow: #000 0px 0px 1px, 1px 1px 0 #000;
}
</style>
