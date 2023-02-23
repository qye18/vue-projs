import Vue from 'vue';
import Vuex from 'vuex';
import commonNav from './nav'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    commonNav
  }
});

export default store;