export default defineNuxtConfig({
  devtools: { enabled: false },
  components: true,
  modules: ["@nuxtjs/partytown", "@nuxt/image", "nuxt-delay-hydration"],
  delayHydration: {
    debug: process.env.NODE_ENV === "development",
    mode: "init",
  },
  routeRules: {
    "/": { prerender: true },
    "/admin/**": { ssr: false },
    "/blog": { isr: 3600 },
  },
});
