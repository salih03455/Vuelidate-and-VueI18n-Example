import { createStore } from 'vuex'
import { selectedLocale } from '@/i18n'

export default createStore({
  state: {
    locale: selectedLocale,
    user: {
      name: '',
      surname: '',
      email: 'salih03455@gmail.com'
    }
  },
  mutations: {
    updateLocale(state, newLocale) {
      state.locale = newLocale
    }
  },
  actions: {
    changeLocale({ commit }, newLocale) {
      localStorage.setItem('lang', newLocale)
      commit('updateLocale', newLocale)
    }
  },
  getters: {
    getLocale(state) {
      return state.user
    }
  }
})
