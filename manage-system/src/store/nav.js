const actions = {
  flipCollapse({commit}) {
    commit('FLIPCOLLAPSE');
  }
}

const mutations = {
  FLIPCOLLAPSE(state) {
    state.isCollapse = !state.isCollapse;
  }
}

const state = {
  isCollapse: false
}

const getters = {}

export default {
  actions,
  mutations,
  state,
  getters
}