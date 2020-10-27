import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  users: {}
}
const mutations = {
  users (state, user) {
    state.users[user.id] = user
  }
}
const getters = {
  users: state => state.users
}
const actions = {
  userById ({state, commit, rootState}, id) {
    return new Promise((resolve, reject) => {
      axios({url: `${process.env.BASE_URL}/api/users/${id}`, method: 'GET'})
        .then(result => {
          commit('users', result.data)
          resolve(result)
        })
        .catch(err => {
          console.error(err)
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
