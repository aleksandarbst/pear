const mutations = {
  SET_SESSION (state, token) {
    state.session = token || null
  },
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

export default mutations
