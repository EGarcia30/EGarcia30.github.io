/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'beba-neue': ['Beba Neue', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			animation:{
				up: "up 20s linear infinite",
				"up-200": "up 40s linear infinite",
				"up-600": "up 60s linear infinite",
				down:"down 20s linear infinite",
				"down-200":"down 40s linear infinite",
				"down-600":"down 60s linear infinite"
			},
			keyframes:{
				up:{
					'0%': {transform: 'translateY(90vh) scale(0)'},
					'50%': {transform:'translateY(10vh) scale(1)'},
					'100%': {transform: 'translateY(90vh) scale(0)'}
				},
				down:{
					'0%': {transform: 'translateY(10vh) scale(0)'},
					'50%': {transform:'translateY(90vh) scale(1)'},
					'100%': {transform: 'translateY(10vh) scale(0)'}
				}
			},
			gridTemplateColumns: {
				// Simple 16 column grid
				auto: 'repeat(auto-fill, minmax(15rem, 1fr))',
			}
		},
		plugins: [],
	}
}