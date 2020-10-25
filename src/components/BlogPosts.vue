<template>
  <v-row>
    <v-col
      v-for="(item,index, key) in posts"
      :key="item.id"
      cols="12"
      :lg="key === 0 ? 12 : 4"
      :md="key === 0 ? 12 : 4"
      :sm="key === 0 ? 12 : 6"
    >
      <v-card>
        <v-img
          :aspect-ratio="1"
          class="white--text align-end"
          gradient="to bottom,rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
        >
          <v-card-title>{{ item.title }}</v-card-title>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
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
