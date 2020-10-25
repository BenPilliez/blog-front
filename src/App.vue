<template>
  <v-app>
    <BlogNav/>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import BlogNav from './components/BlogNav'

export default {
  name: 'App',
  components: {BlogNav}
}
</script>

<style>
</style>
