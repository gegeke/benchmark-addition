import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  itemTemplate: { id: 1, data1: 10 },
  itemData: [],
  disableConditions: {
    settingItem: false,
  },
  runData: {
    noRuns: 1,
    noItems: 10
  }
}

const getters = {
  getRunData: state => {
    return state.runData
  },
  getItemData: state => {
    return state.itemData
  },
  getItemDataLength: state => {
    return state.itemData.length
  }
}

const mutations = {
  setItems(state, data) {
    const item = state.itemTemplate
    const noItems = state.runData.noItems
    const itemArray = []

    state.disableConditions.settingItem = true

    for (let i = 0; i < noItems; i++) {
      itemArray.push({
        id: 0 + i,
        data1: 10 + i
      })
    }

    state.itemData = itemArray

    state.disableConditions.settingItem = false
  }, // setItems()
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
  setItems({ commit }) {
    return new Promise((resolve, reject) => {
      commit('setItems')
      commit('setNoItems')
      resolve(true)
    })
  },
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
  actions,
  getters,
  plugins
})
