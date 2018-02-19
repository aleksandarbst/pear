export default function ({ isHMR, app, store, route, params, error, redirect }) {
  if (isHMR) {
    return
  }
  const locale = params.lang || 'nl'
  if (store.state.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
  if (locale === 'nl' && route.fullPath.indexOf('/nl') === 0) {
    return redirect(route.fullPath.replace(/^\/nl/, '/'))
  }
}
