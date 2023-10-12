export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    hort: "0.0.0.0",
    port: 3200, 
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  js: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js',
      async: true,
    },
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n'
    ],

  i18n: {
    langDir: "~/locales/",
    defaultLocale: "en",
    strategy: 'no_prefix',
    locales: [
      { code: "en", file: "en.json", iso: "en" },
      { code: "ua", file: "ua.json", iso: "ukr" },
      { code: "ru", file: "ru.json", iso: "rus" },
    ],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  layout: 'default',
}
