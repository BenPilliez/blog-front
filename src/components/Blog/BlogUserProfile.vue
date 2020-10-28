<template>
  <v-row no-gutters v-if="user">
    <v-col cols="12">
      <BlogHeader>
        <template v-slot:title>
          {{ user.fullname }}
        </template>
        <template v-slot:subTitle>
          {{ user.intro }}
        </template>
      </BlogHeader>
    </v-col>
  </v-row>

</template>

<script>
import BlogHeader from './BlogHeader'

export default {
  name: 'BlogUserProfile',
  components: {BlogHeader},
  data () {
    return {
      user: null
    }
  },
  beforeMount () {
    this.loadUser(this.$route.params.id)
  },
  methods: {

    loadUser: function (id) {
      if (this.$store.getters.users[id] !== undefined) {
        this.user = this.$store.getters.users[id]
      } else {
        this.$store.dispatch('userById', id)
          .then(() => {
            this.user = this.$store.getters.users[id]
          })
      }
    }

  }
}
</script>

<style scoped>

</style>
