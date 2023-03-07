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
		},
	},
	plugins: [],
};
