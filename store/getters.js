const getters = {
  isAuthenticated (state) {
    return !!state.session
  }
}

export default getters
