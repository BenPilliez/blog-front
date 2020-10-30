<template>
  <v-app-bar
    fixed
    app
    color="transparent"
    elevation="0"
  >
    <v-app-bar-nav-icon  @click.stop="$emit('toggle-drawer')">
       <v-icon large>mdi-menu </v-icon>
    </v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn v-if="showBtnLogout" color="red" fab icon large @click.stop="logout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>

export default {
  name: 'BlogToolBar',
  data () {
    return {
      showLoginForm: false,
      showBtnLogout: false
    }
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'auth_users') {
        this.showBtnLogout = true
      }
    })
  },
  methods: {
    openLogin () {
      this.drawer = false
      this.$root.$children[0].$refs.modalLogin.open()
    },
    openSignup () {
      this.drawer = false
      this.$root.$children[0].$refs.modalSignup.open()
    },
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
