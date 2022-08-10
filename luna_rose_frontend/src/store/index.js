import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getUsers: ({ commit }) => {
      axios.get('https://api.github.com/users')
      .then (res => res)
  },
  modules: {
  }
})
