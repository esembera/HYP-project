export default defineNuxtConfig({
  css: ["~/assets/css/general.css"],
  modules: ["@nuxtjs/supabase", "nuxt-icon", "@nuxtjs/tailwindcss"],
  ssr: true,
  $meta: {
    title: "Zen Ventures",
    name: "Zen Ventures",
    description: "Zen Ventures",
    theme_color: "#ffffff",
    lang: "en",
    ogHost: "https://zen-ventures.vercel.app",
  },
});
