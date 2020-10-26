<template>
  <v-row v-if="post" no-gutters>
    <v-col cols="12">
      <v-parallax
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <h1 class="display-1 font-weight-thin mb-4">
              {{ post.title }}
            </h1>
            <h4 class="subheading">
              Posté par : {{ post.User.firstname }} {{ post.User.lastname }} <br>
              le: {{
                formatDate(post.createdAt)
              }}
            </h4>
          </v-col>
        </v-row>
      </v-parallax>

    </v-col>

    <v-col cols="12">
      {{ post.content }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BlogDetail',
  data () {
    return {
      post: null
    }
  },
  mounted () {
    this.loadPost(this.$route.params.id)
  },
  watch: {
    '$route' () {
      this.loadPost(this.$route.params.id)
    }
  },
  methods: {
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
