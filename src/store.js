import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  itemTemplate: { id: 1, data1: 10 },
  itemData: [],
  runData: {
    noRuns: 1,
    noItems: 10
  }
}

const mutations = {
  setAdditionalItems(state, data) {
    const lastItem = state.itemData[state.itemData.length - 1] || state.itemTemplate
    const noItems = state.runData.noItems - state.itemData.length
    const startId = lastItem.id || 0
    const startData1 = lastItem.data1 || 10
    const itemArray = []

    for (let i = 0; i < noItems; i++) {
      itemArray.push({
        id: startId + i,
        data1: startData1 + i
      })
    }
    state.itemData = state.itemData.concat(itemArray)

  },
  setNoItems(state, noItems) {
    if (typeof noItems !== 'undefined') {
      state.runData.noItems = noItems
    } else {
      state.runData.noItems = state.itemData.length
    }
  }, // setNoItems()
  setNoRuns(state, noRuns) {
    state.runData.noRuns = noRuns
  }
}

const actions = {
  setAdditionalItems({ commit }) {
    return new Promise((resolve, reject) => {
      commit('setAdditionalItems')
      resolve(true)
    })
  },
  setNoItems({ commit }, noItems) {
    commit('setNoItems', noItems)
  },
  setNoRuns({ commit }, noRuns) {
    commit('setNoRuns', noRuns)
  }
}

const plugins = []

export default new Vuex.Store({
  state,
  mutations,
  actions
})
