const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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
		// group-peer-* plugin from https://github.com/tailwindlabs/tailwindcss/discussions/8777
		plugin(function groupPeer({ addVariant }) {
			let pseudoVariants = [
			  // ... Any other pseudo variants you want to support. 
			  // See https://github.com/tailwindlabs/tailwindcss/blob/6729524185b48c9e25af62fc2372911d66e7d1f0/src/corePlugins.js#L78
			  "checked",
			].map((variant) =>
			  Array.isArray(variant) ? variant : [variant, `&:${variant}`],
			);
	  
			for (let [variantName, state] of pseudoVariants) {
			  addVariant(`group-peer-${variantName}`, (ctx) => {
				let result = typeof state === "function" ? state(ctx) : state;
				return result.replace(/&(\S+)/, ":merge(.peer)$1 ~ .group &");
			  });
			}
		  }),
	],
}
