import colors from "vuetify/es5/util/colors";

export default {
  target: "static",

  head: {
    titleTemplate: "%s - chennar",
    title: "chennar",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: ["~/assets/styles/main.scss"],

  plugins: ["~/plugins/mixins/images.js"],

  components: true,

  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/vuetify"],

  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],

  axios: {},

  pwa: {
    manifest: {
      lang: "fa"
    }
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    rtl: true,
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {}
};
