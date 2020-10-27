import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import setAuthorizationToken from '../../helpers/axios'

Vue.use(Vuex)

const state = {
  auth_users: JSON.parse(localStorage.getItem('user')) || {}
}
const mutations = {
  auth_users (state, user) {
    state.auth_users[user.id] = user
  }
}
const getters = {
  auth_users: state => state.auth_user
}
const actions = {
  signup ({commit, state, rootState}, form) {
    return new Promise((resolve, reject) => {
      axios({url: `${process.env.BASE_URL}/api/auth/signup`, data: form, method: 'POST'})
        .then(result => {
          resolve(result)
        })
        .catch(err => {
          console.error(err)
          reject(err)
        })
    })
  },
  login ({state, commit, rootState}, form) {
    return new Promise((resolve, reject) => {
      axios({url: `${process.env.BASE_URL}/api/auth/login`, data: form, method: 'POST'})
        .then(result => {
          setAuthorizationToken(result.data.token)
          localStorage.setItem('token', JSON.stringify(result.data.token))
          localStorage.setItem('user', JSON.stringify(result.data.user))
          commit('auth_users', result.data.user)
          rootState.notification = {
            type: 'success',
            text: 'Tu peux maintenant poster un article si tu veux'
          }
          resolve(result)
        })
        .catch(err => {
          console.error(err)
          localStorage.clear()
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
