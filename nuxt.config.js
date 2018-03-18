module.exports = {
  generate: {
    routes: ['/']
  },
  /*
  ** Headers of the page
  */
  router: {
    middleware: []
  },
  head: {
    titleTemplate: '%s - aleksbatista',
    meta: [
      {charset: 'utf-8'},
      {hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1, minimal-ui'},
      {hid: 'theme-color', name: 'theme-color', content: '#317EFB'},
      {hid: 'description', name: 'description', content: ''},
      {hid: 'keywords', name: 'keywords', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  manifest: {
    name: 'aleksbatista',
    short_name: 'AB',
    display: 'standalone',
    start_url: 'https://localhost:3000',
    theme_color: '#317EFB',
    background_color: '#FFFFFF',
    lang: 'nl'
  },
  modules: [
    ['@nuxtjs/axios'],
    ['@nuxtjs/proxy'],
    ['@nuxtjs/pwa']
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#FF5845',
    height: '5px',
    duration: '1000'
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [],
    analyze: false,
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    {src: '~/plugins/vuex-router-sync.js', ssr: false},
    {src: '~/plugins/uikit.js', ssr: false},
    {src: '~/assets/scss/global.scss', lang: 'scss', ssr: false}
  ]
}
