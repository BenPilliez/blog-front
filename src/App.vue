<template>
  <v-app dark>
    <BlogNav/>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-row>
        <v-snackbar
          :color="color"
          :notification="notification"
          :value="value"
          absolute
          bottom
        >
          {{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn
              v-bind="attrs"
              color="white"
              icon
              @click="value = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
        </v-snackbar>
      </v-row>
      <router-view></router-view>
    </v-main>
    <BlogModalLogin ref="modalLogin"/>
    <BlogModalSignUp ref="modalSignup"/>
    <BlogFooter/>
  </v-app>
</template>

<script>
import BlogNav from '@/components/Blog/NavBlog/BlogNav'
import BlogHeader from '@/components/Blog/BlogHeader'
import BlogFooter from '@/components/Blog/BlogFooter'
import BlogModalLogin from './components/Blog/Modal/BlogModalLogin'
import BlogModalSignUp from './components/Blog/Modal/BlogModalSignUp'

export default {
  name: 'App',
  data () {
    return {
      color: null,
      text: null,
      value: false
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    notification: function () {
      if (this !== undefined && this.$store.getters.notification !== null) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.color = this.$store.getters.notification.type
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.text = this.$store.getters.notification.text
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.value = true
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.$store.commit('message_null')
      }
      return null
    }
  },
  components: {BlogNav, BlogHeader, BlogFooter, BlogModalLogin, BlogModalSignUp}
}
</script>

<style>
</style>
