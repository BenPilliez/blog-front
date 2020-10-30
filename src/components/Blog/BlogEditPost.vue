<template>
  <div>
    <v-row no-gutters>
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
  </div>
</template>

<script>
import BlogHeader from './BlogHeader'

export default {
  name: 'BlogEditPost',
  props: {
    user: Object
  },
  components: {BlogHeader},
  beforeRouteEnter (to, from, next) {

  }
}
</script>

<style scoped>

</style>
