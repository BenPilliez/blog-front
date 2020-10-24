<template>
  <div>
    <v-app-bar
      color="indigo darken-2"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Blog de ben</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
    >

      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4">

          <v-list-item :to="{name:'Posts'}" link>
            <v-list-item-icon>
              <v-icon>mdi-post</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Articles</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{name:'Home'}" link>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Accueil</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  name: 'BlogNav',
  data: () => ({
    drawer: false,
    collapseOnScroll: true,
    group: null
  })
}
</script>

<style lang="scss">

</style>
