<template>
  <v-card class="mx-auto" max-width="400" tile>
    <v-list-item three-line v-for="(comment, index) in comments" :key="index">
      <v-list-item-content>
        <v-list-item-title>{{ comment.author }}</v-list-item-title>
        <v-list-item-subtitle>{{ comment.comment }}</v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-rating
            v-model="comment.rate"
            background-color="pink lighten-3"
            color="pink"
            small
            readonly
          ></v-rating>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "Comments",
  props: {
    comments: Array,
  },
};
</script>
