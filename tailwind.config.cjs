/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				summer: {
					blue: {
						100: "#2e7ba2",
					},
				},
				boreal: {
					blue: {
						100: "#4650bd",
					},
				},
			},
			fontFamily: {
				text: ["Raleway"],
				title: ["Calistoga"],
			},
			keyframes: {
				backInDown_kf: {
					from: {
						transform: "translateY(-200px)",
					},
					to: {
						transform: "translateY(40)",
					},
				},
			},
			animation: {
				backInDown: "backInDown_kf 0.50s",
			},
		},
	},
	plugins: [],
};
