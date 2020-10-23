import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  posts: {}
}
const mutations = {
  posts (state, post) {
    state.posts[post.id] = post
  }
}
const getters = {
  posts: state => state.posts
}
const actions = {
  getPosts ({state, commit, rootState}) {
    rootState.loading = true
    return new Promise((resolve, reject) => {
      axios({url: `${process.env.BASE_URL}/api/posts`, method: 'GET', params: {page: 0, perPage: 10}})
        .then((results) => {
          results.data.map((post) => {
            commit('posts', post)
          })
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
