<template>
  <div v-if="post">
    <v-row no-gutters>
      <v-col cols="12">
        <BlogHeader>
          <template v-slot:title>
            {{ post.title }}
          </template>
          <template v-slot:subTitle>
            Posté par : {{ post.User.fullname }}<br>
            le: {{ post.createdAt }}
          </template>
        </BlogHeader>
      </v-col>
    </v-row>
    <v-container class="mt-8">
      <v-carousel v-if="post.imageUrl && post.imageUrl.length > 0">
        <v-carousel-item
          v-for="(item,i) in post.imageUrl"
          :key="i"
          :src="loadImage(item)"
          cycle
        ></v-carousel-item>
      </v-carousel>

      <v-row>
        <v-col cols="12">
          <v-btn v-for="tag in post.Tags"
                 :key="tag.id" class="mx-2" color="orange" elevation="0" rounded>
            #{{ tag.name }}
          </v-btn>
        </v-col>
        <v-col cols="12">
          <p v-html="post.content"></p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BlogHeader from './BlogHeader'

export default {
  name: 'BlogDetail',
  data () {
    return {
      post: null
    }
  },
  components: {BlogHeader},
  mounted () {
    this.loadPost(this.$route.params.id)
  },
  watch: {
    '$route' () {
      this.loadPost(this.$route.params.id)
    }
  },
  methods: {
    loadImage (name) {
      return `${process.env.BASE_URL}/static/images/${name}`
    },
    loadPost (id) {
      const post = this.$store.getters.posts[id]

      if (post !== undefined) {
        this.post = post
      } else {
        this.$store.dispatch('postById', id)
          .then(() => {
            this.post = this.$store.getters.posts[id]
          })
      }
    },
    formatDate (date) {
      const dateToFormat = new Date(date)
      return dateToFormat.toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>

</style>
