import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'

const store = () => new Vuex.Store({
  state: {
    session: null,
    locales: ['nl', 'en'],
    locale: 'nl',
    user: {
      name: '',
      picture: ''
    }
  },
  mutations,
  getters
})

export default store
