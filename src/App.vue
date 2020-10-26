<template>
  <v-app dark>
    <BlogNav/>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <router-view></router-view>
    </v-main>
    <BlogFooter/>
  </v-app>
</template>

<script>
import BlogNav from '@/components/Blog/BlogNav'
import BlogHeader from '@/components/Blog/BlogHeader'
import BlogFooter from '@/components/Blog/BlogFooter'

export default {
  name: 'App',
  components: {BlogNav, BlogHeader, BlogFooter}
}
</script>

<style>
</style>
