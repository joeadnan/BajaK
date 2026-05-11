export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  srcDir: "app",

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image"],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "BajaKu - Spesialis Baja Ringan Profesional",
      meta: [
        {
          name: "description",
          content:
            "BajaKu adalah perusahaan jasa pemasangan baja ringan, kanopi, rangka atap, plafon, dan konstruksi ringan profesional.",
        },
      ],
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth", // aktifkan smooth scroll
    },
  },
});
