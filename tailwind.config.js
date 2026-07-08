/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				ink: "#171A1A",
				paper: "#F2F1EC",
				mist: "#E4E3DC",
				slate: "#63665F",
				petrol: {
					DEFAULT: "#0C5C53",
					deep: "#073B35",
					light: "#2DD4BF",
				},
			},
			fontFamily: {
				display: ["Fraunces", "serif"],
				sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
				mono: ["IBM Plex Mono", "monospace"],
			},
			animation: {
				"gradient-x": "gradient-x 3s ease infinite",
				"blob": "blob 7s infinite",
				"float": "float 6s ease-in-out infinite",
				"spin-slow": "spin 8s linear infinite",
				"pulse-ring": "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
			},
			keyframes: {
				"gradient-x": {
					"0%, 100%": { "background-position": "0% 50%" },
					"50%": { "background-position": "100% 50%" },
				},
				"blob": {
					"0%": { transform: "translate(0px, 0px) scale(1)" },
					"33%": { transform: "translate(30px, -50px) scale(1.1)" },
					"66%": { transform: "translate(-20px, 20px) scale(0.9)" },
					"100%": { transform: "translate(0px, 0px) scale(1)" },
				},
				"float": {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-12px)" },
				},
				"pulse-ring": {
					"0%": { transform: "scale(0.95)", opacity: "1" },
					"100%": { transform: "scale(1.4)", opacity: "0" },
				},
			},
			backgroundSize: {
				"200": "200% 200%",
			},
		},
	},
	plugins: [],
};
