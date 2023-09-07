/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				accent: '#BDF347',
				'accent-200': '#dcf99d',
				'dark-blue': '#1D2549'
			}
		}
	},
	plugins: []
};
