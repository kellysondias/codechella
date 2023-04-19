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
					hero: "#444444"
				},
				boreal: {
					blue: {
						100: "#4650bd",
					},
					hero: "#ffffff"
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
				backOutUp: "backOutUp_kf 0.40s",
			},
			backgroundImage: {
				"summer-banner": "url('/assets/img/banners/summer-banner.jpeg')",
				"boreal-banner": "url('/assets/img/banners/boreal-banner.jpeg')"
			},
		},
	},
	plugins: [],
};
