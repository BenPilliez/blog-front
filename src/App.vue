<template>
  <div id="app">
    <v-app dark>
      <BlogNav/>
      <router-view/>
    </v-app>

  </div>
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
