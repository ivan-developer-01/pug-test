module.exports = {
	entry: "/index.js",
	output: {
		filename: "main.js",
	},
	plugins: [new HtmlWebpackPlugin({ template: "/index.pug" })],
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: "pug-loader",
				options: {
					pretty: true,
				},
			},
		],
	},
};
