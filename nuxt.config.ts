export default defineNuxtConfig({
  css: [
    "~/assets/css/general.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  modules: ["@nuxtjs/supabase"],
  ssr: true,
});
