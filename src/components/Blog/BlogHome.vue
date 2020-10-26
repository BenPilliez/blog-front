<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12">
        <BlogHeader>
          <template v-slot:title>
            Bienvenu sur mon Blog
          </template>
          <template v-slot:subTitle>
            Il a été réalisé en deux parties distinct, un front en Vue.js et Vuetify <br>
            Un Back sous forme d'api avec Node.js
          </template>
        </BlogHeader>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BlogHeader from './BlogHeader'

export default {
  name: 'Home',
  components: {BlogHeader}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
