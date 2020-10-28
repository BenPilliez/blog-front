<template>
  <div v-if="user">
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
    <v-container
      class="mx-auto"
      max-width="400">
      <v-row dense>
        <v-col cols="4" sm="3">
          <v-select
            v-if="this.posts.length > 0"
            v-model="pageSize"
            :items="pageSizes"
            label="Articles par page"
            @change="handlePageSizeChange"
          ></v-select>
        </v-col>
        <v-col
          v-for="post in posts"
          :key="post.id"
          cols="12"
        >
          <v-card
            color="#385F73"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="post.title"
                ></v-card-title>

                <v-card-subtitle v-text="post.createdAt"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-3"
                    fab
                    height="40px"
                    icon
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img src="../static/img/material.jpg"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-pagination
            v-if="this.posts.length > 0"
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
import paginate from '../../helpers/paginate'

export default {
  name: 'UserAccount',
  components: {BlogHeader},
  data () {
    return {
      user: null,
      posts: null,
      page: 1,
      totalPages: 0,
      pageSize: 7,
      pageSizes: [3, 7, 10, 20]
    }
  },
  beforeMount () {
    this.loadAccount()
  },
  methods: {
    handlePageChange (value) {
      this.page = value
      this.paginateArray()
    },
    loadAccount () {
      const authId = this.$store.getters.auth_users.id
      if (this.$store.getters.users[authId] !== undefined) {
        this.user = this.$store.getters.users[authId]
        this.paginateArray()
      } else {
        this.$store.dispatch('account')
          .then(() => {
            this.user = this.$store.getters.users[authId]
            this.paginateArray()
          })
      }
    },
    paginateArray () {
      this.posts = paginate(this.user.Posts, this.pageSize, this.page)
      this.totalPages = Math.ceil(this.user.Posts.length / this.pageSize)
    },
    handlePageSizeChange (size) {
      this.pageSize = size
      this.page = 1
      this.paginateArray()
    }
  }
}
</script>
