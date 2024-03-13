// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	typescript: { includeWorkspace: true },

	// Global CSS
	css: ["~/assets/main.css"],

	runtimeConfig: {
		jwtAccessSecret: process.env.JWT_ACCESSTOKEN_TOKEN_SECRET,
		jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
	},

	modules: ["@nuxtjs/google-fonts"],
	googleFonts: {
		families: {
			Montserrat: {
				wght: "100..900",
			},
		},
	},
});
