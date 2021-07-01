<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer />

      <v-btn text @click="toHomeView" class="nav-btn">Home</v-btn>
      <v-btn text @click="toGamesView" class="nav-btn">Games</v-btn>
      <v-btn text @click="toAboutView" class="nav-btn">About</v-btn>

      <v-spacer />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    toHomeView() {
      this.$router.push("/");
    },
    toGamesView() {
      this.$router.push("/games");
    },
    toAboutView() {
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped>
.nav-btn {
  margin: 1px;
}
</style>
