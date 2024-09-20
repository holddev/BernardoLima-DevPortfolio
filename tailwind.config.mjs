/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			darkMode: 'class',
			fontFamily: {
				jura: ['Jura Variable', 'sans-serif'],
				questrial: ['Questrial', 'sans-serif']
			},
			fontWeight: {
				light: 300,
				regular: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
				extrabold: 800,
				black: 900,
			},
		},
	},
	plugins: [],
}
