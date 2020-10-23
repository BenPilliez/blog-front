<template>
  <vs-row v-if="posts" vs-justify="space-around" vs-type="flex">

    <vs-col v-for="item in posts" :key="item.id"  vs-align="center" vs-justify="center" vs-type="flex"
            vs-w="5">
      <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
            {{ item.title }}
          </h3>
        </div>
        <div slot="media">
          <img alt="article image" src="../assets/card.png"/>
        </div>
        <div>
          <span>{{ item.content }}</span>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button color="primary" type="gradient">View</vs-button>
            <vs-button color="danger" type="gradient">Delete</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
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
