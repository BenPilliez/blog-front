<template>
  <div>
    <BlogSideBar :user="user"></BlogSideBar>
  </div>
</template>

<script>

import BlogSideBar from './BlogSideBar'

export default {
  name: 'BlogNav',
  components: {BlogSideBar},
  data: () => ({
    user: null
  })
}
</script>

<style lang="scss">

</style>
