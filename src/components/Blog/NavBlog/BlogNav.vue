<template>
  <div>
    <BlogToolBar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer"></BlogToolBar>
    <BlogSideBar ref="drawer" :user="user"></BlogSideBar>
  </div>
</template>

<script>

import BlogToolBar from './BlogToolBar'
import BlogSideBar from './BlogSideBar'

export default {
  name: 'BlogNav',
  components: {BlogToolBar, BlogSideBar},
  data: () => ({
    drawer: false,
    user: null
  })
}
</script>

<style lang="scss">

</style>
