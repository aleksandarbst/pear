export default function ({ isHMR, app, store, route, params, error, redirect }) {
  if (!store.state.session && route.meta.auth) {
    error({
      message: 'Unauthorized',
      statusCode: 401
    })
  }
}
