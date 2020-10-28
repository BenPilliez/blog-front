import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import setAuthorizationToken from '../../helpers/axios'

Vue.use(Vuex)

const state = {
  auth_users: JSON.parse(localStorage.getItem('user')) || null
}
const mutations = {
  auth_users (state, user) {
    state.auth_users = user
  }
}
const getters = {
  auth_users: state => state.auth_users
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
          commit('notification', {
            color: 'success',
            icon: 'mdi-check-circle',
            mode: null,
            timeout: 6000,
            text: 'Tu es bien connecté'
          })
          resolve(result)
        })
        .catch(err => {
          commit('notification', {
            color: 'red darken-2',
            icon: 'mdi-alert-circle',
            mode: null,
            timeout: 7500,
            text: err.response.data.error
          })
          localStorage.clear()
          reject(err)
        })
    })
  },
  logout ({commit}) {
    setAuthorizationToken()
    localStorage.clear()
    commit('notification', {
      color: 'success',
      icon: 'mdi-check-circle',
      mode: null,
      timeout: 6000,
      text: 'Tu es bien déconnecté, à plus !'
    })
    commit('auth_users', null)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
