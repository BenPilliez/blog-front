<template>
  <div>
    <v-app-bar
      elevation="0"
      fixed
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Blog en Vue.js</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <v-icon>mdi-login</v-icon>
        Se connecter
      </v-btn>

      <v-btn text>
        <v-icon>mdi-account-plus</v-icon>
        Créer un compte
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      fixed
      temporary
    >
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="{path: item.path}"
          active-class="red--text"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-if="user" v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'BlogNav',
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        icon: 'mdi-home',
        text: 'Accueil',
        path: '/'
      },
      {
        icon: 'mdi-post',
        text: 'Articles',
        path: '/posts'
      }
    ],
    user: null
  }),
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style lang="scss">

</style>
