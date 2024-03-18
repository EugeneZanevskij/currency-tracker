const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(config, {
	mode: "development",
	devtool: "source-map",
	devServer: {
		port: "3000",
		static: {
			directory: path.join(__dirname, "public"),
		},
		client: {
			overlay: false,
		},
		open: true,
		hot: true,
		liveReload: true,
	},
});
