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
				backOut_kf: {
					to: {
						opacity: 0,
					},
				},
				backInDown_kf: {
					from: {
						transform: "translateY(-300px)",
					},
					to: {
						transform: "translateY(40)",
					},
				},
				backOutUp_kf: {
					to: {
						opacity: 0,
						transform: "translateY(-300px)",
					},
				},
			},
			animation: {
				backOut: "backOut_kf 0.50s ",
				backInDown: "backInDown_kf 0.50s",
				backOutUp: "backOutUp_kf 0.25s",
			},
		},
	},
	plugins: [],
};
