const axios = require('axios')

module.exports = {
  generate: {
    routes: ['/', '/en']
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
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ]
  },
  sitemap: {
    path: '/sitemap.xml',
    generate: true,
    routes () {
      return axios.get('/api/sitemap')
        .then(res => res.data.map(user => '/items/' + user.username))
    }
  },
  manifest: {
    name: 'Boilerplate',
    short_name: 'PSM',
    display: 'standalone',
    start_url: 'https://localhost:3000',
    theme_color: '#317EFB',
    background_color: '#FFFFFF',
    lang: 'nl'
  },
  modules: [
    ['@nuxtjs/google-tag-manager', { id: 'GTM-XXXXXXX' }],
    ['@nuxtjs/axios'],
    ['@nuxtjs/proxy'],
    ['@nuxtjs/sitemap'],
    ['@nuxtjs/pwa']
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#317EFB'
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
      if (ctx.dev && ctx.isClient) {
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
