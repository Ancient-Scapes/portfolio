import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      mode: true
    }),
    mutations: {
      changeMode(state) {
        state.mode = state.mode ? false : true
      }
    }
  })
}

export default createStore
