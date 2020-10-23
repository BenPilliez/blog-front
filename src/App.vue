<template>
  <div id="app">
    <BlogNav/>
    <router-view/>
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
