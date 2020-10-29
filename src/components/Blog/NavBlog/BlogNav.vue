<template>
  <div>
    <BlogToolBar v-if="$vuetify.breakpoint.mobile"
                 @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer"></BlogToolBar>
    <BlogSideBarMobile v-if="$vuetify.breakpoint.mobile" ref="drawer" :user="user"></BlogSideBarMobile>
    <BlogSideBar v-if="$vuetify.breakpoint.lg" :user="user"></BlogSideBar>
  </div>
</template>

<script>

import BlogSideBar from './BlogSideBar'
import BlogToolBar from './BlogToolBar'
import BlogSideBarMobile from './BlogSideBarMobile'

export default {
  name: 'BlogNav',
  components: {BlogSideBar, BlogToolBar, BlogSideBarMobile},
  data: () => ({
    user: null
  })
}
</script>

<style lang="scss">

</style>
