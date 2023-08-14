const path = require('path');

module.exports = {
	mode: "development", // production || development
	entry: './src/js/index.js',
	output: {
		filename: 'all.js',
		path: path.resolve(__dirname, 'dist/js/'),
	},
	watch: true,
};