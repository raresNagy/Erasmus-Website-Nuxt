// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	// Global CSS
	css: ["~/assets/main.css"],

	modules: ["@nuxtjs/google-fonts"],
	googleFonts: {
		families: {
			Montserrat: {
				wght: "100..900",
			},
		},
	},
});
