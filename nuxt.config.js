export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'smargelov.ml',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/main.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    'nuxt-google-optimize-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        additionalData: `
          @use "sass:math"
          @import "@/assets/sass/utils/vars.sass"
          @import "@/assets/sass/utils/mixins.sass"
        `
      }
    }
  },

  gtm: {
    id: 'GTM-PCLR6X4',
    debug: true,
    enabled: true
  },

  googleOptimize: {
    id: 'OPT-KN63QL2',
    eventHandler: (experiment, { $gtm }) => {
      const exp = `${experiment.experimentID}.${experiment.$variantIndexes.join('-')}`
      $gtm.push({ exp })
    }
  },

  publicRuntimeConfig: {
    gtm: {
      id: 'GTM-PCLR6X4'
    },
    googleOptimize: {
      id: 'OPT-KN63QL2',
      eventHandler: (experiment, { $gtm }) => {
        const exp = `${experiment.experimentID}.${experiment.$variantIndexes.join('-')}`
        $gtm.push({ exp })
      }
    }
  },

  server: {
    host: process.env.NUXT_HOST,
    port: process.env.NUXT_PORT
  }
}
