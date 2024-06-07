import animations from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'icon-skyblue': 'rgb(30, 156, 241)',
				'icon-lightGreen': 'rgb(0, 184, 122)',
				'icon-carmesi': 'rgb(249, 26, 130)'
			}
		}
	},
	plugins: [animations],
}
