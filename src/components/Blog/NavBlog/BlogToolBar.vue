<template>
  <v-app-bar
    app
    color="transparent"
    elevation="0"
    fixed
  >
    <v-app-bar-nav-icon @click.stop="$emit('toggle-drawer')">
      <v-icon large>mdi-menu</v-icon>
    </v-app-bar-nav-icon>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>

export default {
  name: 'BlogToolBar',
  data () {
    return {
      showLoginForm: false
    }
  },
  methods: {
    openLogin () {
      this.drawer = false
      this.$root.$children[0].$refs.modalLogin.open()
    },
    openSignup () {
      this.drawer = false
      this.$root.$children[0].$refs.modalSignup.open()
    }
  }
}
</script>

<style scoped>

</style>
