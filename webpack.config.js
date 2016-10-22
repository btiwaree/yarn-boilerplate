module.exports = {
	entry: "./index.js",
	output: {
		path: "./",
		filename: "main.js"
	},
	devServer:{
		inline: true,
		port: 3000
		//since webpack-dev-server is used, removing port will use 8080 by default.
	},
	modules : {
		loaders: [
			{ test: /\.css$/ , loader: "style-loader!css-loader" }
		]
	}
}