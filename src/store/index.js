import Vue from 'vue'
import Vuex from 'vuex'
import postsStore from './modules/posts'

Vue.use(Vuex)

export const store = new Vuex.Store(
  {
    state: {
      loading: false,
      message: null
    },

    modules: {
      Posts: postsStore
    },
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
