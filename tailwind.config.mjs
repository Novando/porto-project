import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [...defaultTheme.fontFamily.sans]
			},
			colors: {
				light: '#EFEFEF',
				dark: '#191B27',
				primary: '#0DBADE',
			},
			backgroundImage: {
				'porto-hero-dark': "url('./src/assets/image/hero-backdrop-dark.webp')",
				'porto-hero': "url('./src/assets/image/hero-backdrop.webp')",
			},
		},
	},
	plugins: [],
}
