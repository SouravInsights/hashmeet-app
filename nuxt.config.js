import * as iconSet from "./utils/icons";

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "hashmeet-app",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/repositories.js"],

  axios: {
    baseURL: process.env.API_BASE_URL || "https://jsonplaceholder.typicode.com"
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  /* buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ], */

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/chakra
    "@chakra-ui/nuxt",
    // https://go.nuxtjs.dev/emotion
    "@nuxtjs/emotion",
    // https://axios.nuxtjs.org
    "@nuxtjs/axios"
  ],
  chakra: {
    config: {
      autoImport: true
    },
    icons: {
      iconPack: "fa",
      iconSet
    },
    extendTheme: {
      fonts: {
        heading: '"Segoe UI", sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
        body: '"Segoe UI", sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'
      },
      shadows: {},
      colors: {}
    }
  },
  build: {},
  vue: {
    config: {
      productionTip: true,
      devtools: true
    }
  }
};
