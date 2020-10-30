<template>
  <div v-if="user">
    <router-view :user="user"></router-view>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      user: this.loadAccount()
    }
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
