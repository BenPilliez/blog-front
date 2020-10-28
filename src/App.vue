<template>
  <v-app dark>
    <BlogNav/>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <Snackbar/>
      <router-view></router-view>
      <BlogModalLogin ref="modalLogin"/>
      <BlogModalSignUp ref="modalSignup"/>
      <BlogFooter/>
    </v-main>
  </v-app>
</template>

<script>
import BlogNav from '@/components/Blog/NavBlog/BlogNav'
import BlogHeader from '@/components/Blog/BlogHeader'
import BlogFooter from '@/components/Blog/BlogFooter'
import BlogModalLogin from './components/Blog/Modal/BlogModalLogin'
import BlogModalSignUp from './components/Blog/Modal/BlogModalSignUp'
import Snackbar from './components/Blog/notification/Snackbar'

export default {
  name: 'App',
  components: {BlogNav, BlogHeader, BlogFooter, BlogModalLogin, BlogModalSignUp, Snackbar}
}
</script>

<style>
</style>
