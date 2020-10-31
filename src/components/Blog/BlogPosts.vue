<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12">
        <BlogHeader>
          <template v-slot:title>
            Les différents Articles
          </template>
          <template v-slot:subTitle>
            Bonne lecture
          </template>
        </BlogHeader>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="4" sm="3">
          <v-select
            v-model="pageSize"
            :items="pageSizes"
            label="Articles par page"
            @change="handlePageSizeChange"
          ></v-select>
        </v-col>
        <v-col
          v-for="(item,index) in posts"
          :key="item.id"
          :lg="index === 0 ? 12 : 4"
          :md="index === 0 ? 12 : 4"
          :sm="index === 0 ? 12 : 6"
          cols="12"
        >
          <v-card>
            <v-img
              v-if="!item.imageUrl"
              :aspect-ratio="1"
              class="white--text align-end"
              gradient="to bottom,rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              src="../static/img/material.jpg"
            >

              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>

            <v-img
              v-if="item.imageUrl !== undefined"
              :aspect-ratio="1"
              :src="loadImage(item.imageUrl[0])"
              class="white--text align-end"
              gradient="to bottom,rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>
            <v-card-subtitle>
              <v-icon>mdi-view-list</v-icon>
              {{ item.Category.name }}
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-subtitle v-if="item.Tags.length > 0 ">
              <v-icon>mdi-flag</v-icon>
              <span v-for="tag in item.Tags" :key="tag.id">
            #{{ tag.name }}
           </span>
            </v-card-subtitle>

            <v-card-actions>
              <v-row justify="center">
                <v-btn
                  :to="{name: 'BlogDetail', params:{id: item.id}}"
                  color="primary"
                >
                  Lire
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-pagination
            v-model="page"
            :length="totalPages"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @input="handlePageChange"
          >
          </v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BlogHeader from './BlogHeader'

export default {
  name: 'BlogPosts',
  data () {
    return {
      posts: null,
      totalPages: 0,
      page: 1,
      pageSize: 7,
      pageSizes: [3, 7, 10, 20]
    }
  },
  components: {BlogHeader},
  mounted () {
    this.loadPosts()
  },
  methods: {
    loadImage (name) {
      return `${process.env.BASE_URL}/static/images/${name}`
    },
    getRequestParams (page, pageSize) {
      let params = {}
      if (page) {
        params['page'] = page - 1
      }

      if (pageSize) {
        params['perPage'] = pageSize
      }

      return params
    },
    loadPosts () {
      const params = this.getRequestParams(
        this.page,
        this.pageSize
      )

      const posts = this.$store.getters.postsPaginated[this.stringifyParams(params)]

      if (posts !== undefined) {
        this.posts = posts.items
        this.totalPages = posts.totalPages
      } else {
        this.$store.dispatch('paginatePosts', params).then(() => {
          const posts = this.$store.getters.postsPaginated[this.stringifyParams(params)]
          this.posts = posts.items
          this.totalPages = posts.totalPages
        })
      }
    },
    stringifyParams (params) {
      return JSON.stringify(params)
    },
    handlePageChange (value) {
      this.page = value
      this.loadPosts()
    },
    handlePageSizeChange (size) {
      this.pageSize = size
      this.page = 1
      this.loadPosts()
    }
  }
}
</script>

<style scoped>
</style>
