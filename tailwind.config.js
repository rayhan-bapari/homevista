/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: '#C1DEE8',
			secondary: '#FBD9B9',
			black: '#000000',
			gray: '#1F1F1F',
			gray2: '#fafafa',
			offwhite: '#BEBEBE',
			white: '#FFFFFF',
			white2: '#fefefe',
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1200px',
			'2xl': '1536px',
		},
		extend: {},
	},
};
