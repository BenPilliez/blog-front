<template>
  <v-list>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-avatar color="red">
          <span class="text--white headline ">{{ user.initial }}</span>
        </v-avatar>
      </v-list-item-avatar>
      <v-btn v-if="showBtnLogout" color="red" fab icon large @click.stop="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
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
  },
  data () {
    return {
      showBtnLogout: false
    }
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'auth_users') {
        this.showBtnLogout = true
      }
    })

    if (localStorage.getItem('user')) {
      this.showBtnLogout = true
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(() => {
          if (this.$route.name !== 'Home') {
            this.$router.push('/')
          }
          this.showBtnLogout = false
        })
    }
  }
}
</script>

<style scoped>

</style>
