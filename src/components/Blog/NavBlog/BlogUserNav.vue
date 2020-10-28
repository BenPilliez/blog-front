<template>
  <v-list>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-avatar color="red">
          <span class="text--white headline ">{{ user.initial }}</span>
        </v-avatar>
      </v-list-item-avatar>
    </v-list-item>
    <v-list-item :to="{name: 'userAccount'}" link>
      <v-list-item-content>
        <v-list-item-title class="title">
          {{ user.fullname }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>

</template>

<script>
export default {
  name: 'BlogUserNav',
  props: {
    user: Object
  }
}
</script>

<style scoped>

</style>
