import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      mode: {
        isOld: true,
        isFuture: true
      }
    }),
    mutations: {
      changeMode(state) {
        if (state.mode.isOld) {
          state.mode.isOld = false
          state.mode.isFuture = true
        } else if (state.mode.isFuture) {
          state.mode.isOld = true
          state.mode.isFuture = false
        }
      }
    },
    getters: {
      getMode: state => {
        if (state.mode.isOld) {
          return '古代モード'
        } else if (state.mode.isFuture) {
          return '現代モード'
        }
      },
      isOld: state => {
        if (state.mode.isOld) return true
        return false
      },
      isFuture: state => {
        if (state.mode.isFuture) return true
        return false
      }
    }
  })
}

export default createStore
