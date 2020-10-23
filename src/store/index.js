import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store(
  {
    state: {
      loading: false,
      message: null
    },

    modules: {},
    mutations: {
      message (state, message) {
        state.message = {
          type: message.type,
          text: message.text
        }
      },
      message_null (state) {
        state.message = null
      }
    },

    getters: {
      message: state => state.message,
      loading: state => state.loading
    }
  }
)
