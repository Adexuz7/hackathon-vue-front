<template>
  <v-card class="mx-auto" max-width="400" tile>
    <v-list-item three-line v-for="(comment, index) in comments" :key="index">
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
</template>

<script>
export default {
  props: {
    comments: Array,
  },
};
</script>
