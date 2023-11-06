import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    '@pinia/nuxt',
    "@nuxtjs/google-fonts",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        if (!config.plugins) config.plugins = [];
        config.plugins.push(vuetify());
      });
    },
  ],
  typescript: { shim: false },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Battambang: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    download: false,
    useStylesheet: true,
  },

  css: [
    "~/assets/css/main.css",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
