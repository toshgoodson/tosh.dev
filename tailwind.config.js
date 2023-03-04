const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
				'mono': ['var(--font-roboto-mono)', ...defaultTheme.fontFamily.mono],
				'pixel': ['var(--font-dungeon-chunk)', ...defaultTheme.fontFamily.sans],
				'emoji': ['var(--font-noto-emoji)', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [
		require('tailwindcss-rfs'),
	],
}
