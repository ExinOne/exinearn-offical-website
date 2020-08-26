import axios from 'axios';
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '比特币奖励平台-水龙头App',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=0,viewport-fit=cover',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '水龙头App是一个比特币奖励平台，通过水龙头App可以获得免费的比特币奖励，同时可也可以学习比特币、区块链知识。',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '比特币，水龙头App，返利，奖励',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  bootstrapValue: {
    components: ['BContainer', 'BNavBar', 'BRow', 'BCol', 'BButton', 'BModal'],
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseUrl: 'https://app.exinearn.com',
    proxy: true,
    prefix:
      process.env.NODE_ENV !== 'production'
        ? '/api/v1'
        : 'https://app.exinearn.com/api/v1',
    credentials: false,
  },
  proxy: {
    '/api/v1': {
      target: process.env.PROXY_URL,
      changeOrigin: true,
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: {
      allChunks: true,
    },
    // optimization: {splitChunks: true},
  },
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: '',
  },
  // generate: {
  //   routes: [''],
  // },
};
