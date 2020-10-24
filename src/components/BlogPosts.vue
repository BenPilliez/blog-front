<template>
  <div></div>
</template>

<script>
export default {
  name: 'BlogPosts',
  data () {
    return {
      posts: null
    }
  },
  beforeMount () {
    this.loadPosts()
  },
  methods: {
    loadPosts () {
      this.$store.dispatch('getPosts').then(() => {
        this.posts = this.$store.getters.posts
      })
    }
  }
}
</script>

<style scoped>

</style>
