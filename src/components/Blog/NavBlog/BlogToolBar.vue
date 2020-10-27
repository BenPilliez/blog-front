<template>
  <v-app-bar
    elevation="0"
    fixed
  >
    <v-app-bar-nav-icon @click.stop="$emit('toggle-drawer')"></v-app-bar-nav-icon>
    <v-toolbar-title>Blog en Vue.js</v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="!$vuetify.breakpoint.mobile">
      <v-btn text @click.stop="openLogin">
        <v-icon>mdi-login</v-icon>
        Se connecter
      </v-btn>
      <v-btn text @click.stop="openSignup">
        <v-icon>mdi-account-plus</v-icon>
        Créer un compte
      </v-btn>
    </div>
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
