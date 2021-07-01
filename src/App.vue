<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      prominent
      src="./assets/955059.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-spacer></v-spacer>
        <v-btn text @click="toHomeView" class="nav-btn">Home</v-btn>

        <v-btn text @click="toGamesView" class="nav-btn">Games</v-btn>

        <v-btn text @click="toAboutView" class="nav-btn">About</v-btn>
        <v-spacer></v-spacer>
      </template>
    </v-app-bar>
  </v-card>
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
  font-family: Roboto, sans-serif;
}
</style>
