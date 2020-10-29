<template>
  <v-app-bar
    elevation="0"
    fixed
  >
    <v-app-bar-nav-icon @click.stop="$emit('toggle-drawer')"></v-app-bar-nav-icon>
    <v-toolbar-title>Blog en Vue.js</v-toolbar-title>
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
