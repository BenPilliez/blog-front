import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  postsPaginated: {},
  posts: {}
}
const mutations = {
  postsPaging (state, post) {
    state.postsPaginated[post.params] = {}
    state.postsPaginated[post.params].items = post.items
    state.postsPaginated[post.params].totalPages = post.totalPages
  },
  posts (state, post) {
    state.posts[post.id] = post
  }
}
const getters = {
  postsPaginated: state => state.postsPaginated,
  posts: state => state.posts
}
const actions = {
  paginatePosts ({state, commit, rootState}, params) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${process.env.BASE_URL}/api/posts`,
        method: 'GET',
        params: {page: params.page, perPage: params.perPage}
      })
        .then(results => {
          results.data.params = JSON.stringify(params)
          commit('postsPaging', results.data)
          resolve(results)
        })
        .catch(err => {
          console.error(err)
          reject(err)
        })
    })
  },
  postById ({state, commit, rootState}, id) {
    return new Promise((resolve, reject) => {
      axios({url: `${process.env.BASE_URL}/api/posts/${id}`, method: 'GET'})
        .then(result => {
          commit('posts', result.data)
          resolve(result)
        })
        .catch(err => {
          console.error(err)
          reject(err)
        })
    })
  },
  addPost ({commit}, form) {
    return new Promise((resolve, reject) => {
      if (form.isFormData) {
        axios.headers = {
          'Content-Type': 'multipart/form-data'
        }
      }
      axios({
        url: `${process.env.BASE_URL}/api/posts`,
        data: form.form,
        method: 'POST'
      })
        .then((result) => {
          commit('posts', result)
          commit('notification', {
            color: 'success',
            icon: 'mdi-check-circle',
            mode: null,
            timeout: 6000,
            text: 'Merci pour ta contribution'
          })

          resolve(result)
        })
        .catch((err) => {
          console.log(err)
          commit('notification', {
            color: 'red darken-2',
            icon: 'mdi-alert-circle',
            mode: 'multiline',
            timeout: 7500,
            text: 'Oops on a un problème, check le form ou alors j\'ai fait une connerie'
          })
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
