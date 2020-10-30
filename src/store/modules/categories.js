import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  categories: {}
}
const mutations = {
  categories (state, category) {
    state.categories[category.id] = category
  }
}
const getters = {
  categories: state => state.categories
}
const actions = {

  getCategories ({state, commit}) {
    return new Promise((resolve, reject) => {
      axios({url: `${process.env.BASE_URL}/api/categories`, method: 'GET'})
        .then((results) => {
          results.data.map((category) => {
            commit('categories', category)
          })
          resolve(results)
        })
        .catch((err) => {
          console.error(err)
          reject(err)
        })
    })
  },
  categoryById ({state, commit}, id) {
    return new Promise((resolve, reject) => {
      axios({url: `${process.env.BASE_URL}/api/categories/${id}`, method: 'GET'})
        .then((result) => {
          commit('categories', result.data)
          resolve(result)
        })
        .catch((err) => {
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
