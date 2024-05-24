/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./application/views/*.ejs', './application/views/includes/*.ejs'],
	theme: {
		extend: {},
	},
	plugins: [
		{
			tailwindcss: {},
			autoprefixer: {},
		},
	],
}
