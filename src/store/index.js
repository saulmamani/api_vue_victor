import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //variables globales
    url: `${process.env.VUE_APP_URL_IP}`,
  },
  getters:{
    getUrl(state) {
      return state.url;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
