<template>
  <v-row v-if="user" no-gutters>
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
  name: 'UserAccount',
  components: {BlogHeader},
  data () {
    return {
      user: null
    }
  },
  beforeMount () {
    this.loadAccount()
  },
  methods: {
    loadAccount () {
      const authId = this.$store.getters.auth_users.id
      if (this.$store.getters.users[authId] !== undefined) {
        this.user = this.$store.getters.users[authId]
      } else {
        this.$store.dispatch('account')
          .then(() => {
            this.user = this.$store.getters.users[authId]
          })
      }
    }
  }
}
</script>
