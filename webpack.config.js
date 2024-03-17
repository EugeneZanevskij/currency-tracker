const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	entry: "./index.jsx",
	mode: "development",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"],
	},
	target: "web",
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
	module: {
		rules: [
			{
				test: /\.(css)$/,
				use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html"),
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[hash].css",
		}),
	],
};
