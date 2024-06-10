import animations from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['selector', 'html:has(input#dark-theme-switch:checked)'],
	theme: {
		extend: {
			colors: {
				'icon-skyblue': 'rgb(30, 156, 241)',
				'icon-lightGreen': 'rgb(0, 184, 122)',
				'icon-carmesi': 'rgb(249, 26, 130)',
				'secondary': {
					'50': '#eff5fe',
					'100': '#e3ecfc',
					'200': '#cbdcfa',
					'300': '#acc4f5',
					'400': '#8ba3ee',
					'500': '#7d8fe8',
					'600': '#5360d8',
					'700': '#444dbe',
					'800': '#39419a',
					'900': '#353d7a',
					'950': '#1f2347',
				},
			},
		}
	},
	plugins: [animations],
}
