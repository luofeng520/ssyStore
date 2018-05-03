import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: {},
  getters: {},
  mutations: {},
  actions: {}
};

const moduleB = {
  state: {},
  getters: {},
  mutations: {},
  actions: {}
};

const store = new Vuex.Store({
  modules: {
      a: moduleA,
      b: moduleB
  }
});
