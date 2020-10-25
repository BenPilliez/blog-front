import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  posts: {}
}
const mutations = {
  posts (state, post) {
    state.posts[post.params] = {}
    state.posts[post.params].items = post.items
    state.posts[post.params].totalPages = post.totalPages
  }
}
const getters = {
  posts: state => state.posts
}
const actions = {
  getPosts ({state, commit, rootState}, params) {
    rootState.loading = true
    return new Promise((resolve, reject) => {
      axios({
        url: `${process.env.BASE_URL}/api/posts`,
        method: 'GET',
        params: {page: params.page, perPage: params.perPage}
      })
        .then((results) => {
          results.data.params = JSON.stringify(params)
          commit('posts', results.data)
          rootState.loading = false
          resolve(results)
        })
        .catch((err) => {
          console.error(err)
          rootState.loading = false
          rootState.message = {
            type: 'error',
            text: 'Oops on a eu un problème pendant le chargement des articles'
          }
          reject(err)
        })
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
