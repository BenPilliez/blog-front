<template>

  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    fixed
    temporary
  >
    <BlogUserNav v-if="user" :user="user"/>

    <v-list
      v-if="!user"
      densed
      link
      nav
    >
      <v-list-item @click.stop="openLogin">
        <v-list-item-icon>
          <v-icon>mdi-login</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          Se connecter
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click.stop="openSignup">
        <v-list-item-icon>
          <v-icon>mdi-account-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          Créer un compte
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
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
        <v-btn block @click.stop="logout">
          Logout
        </v-btn>
      </div>
    </template>

  </v-navigation-drawer>
</template>

<script>
import BlogUserNav from './BlogUserNav'

export default {
  name: 'BlogSideBar',
  components: {BlogUserNav},
  data () {
    return {
      user: this.$store.getters.auth_users,
      items: [
        {
          icon: 'mdi-home',
          text: 'Accueil',
          path: '/'
        },
        {
          icon: 'mdi-post',
          text: 'Articles',
          path: '/articles'
        }
      ]
    }
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'auth_users') {
        this.user = state.Auth.auth_users
      }
    })
  },
  methods: {
    openLogin () {
      this.$root.$children[0].$refs.modalLogin.open()
    },
    openSignup () {
      this.$root.$children[0].$refs.modalSignup.open()
    },
    logout () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style scoped>

</style>
