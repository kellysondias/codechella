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
					gradient: {
						100: "#c8deef",
						200: "#fbf0dd",
						300: "#facf9d",
					},
					hero: "#444444",
				},
				boreal: {
					blue: {
						100: "#4650bd",
					},
					gradient: {
						100: "#304968",
						200: "#36c1a0",
						300: "#b6bcff",
					},
					hero: "#ffffff",
				},
			},
			fontFamily: {
				text: "Raleway",
				title: "Calistoga",
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
				"back-out": "backOut_kf 0.50s ",
				"back-in-down": "backInDown_kf 0.50s",
				"back-out-up": "backOutUp_kf 0.40s",
			},
			backgroundImage: {
				"summer-banner": "url('/assets/img/summer/summer-banner.jpeg')",
				"boreal-banner": "url('/assets/img/boreal/boreal-banner.jpeg')",
			},
		},
	},
	plugins: [],
};
