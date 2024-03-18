const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.jsx",
	mode: "development",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"],
	},
	target: "web",
	module: {
		rules: [
			{
				test: /\.(css)$/,
				use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				type: "asset/resource",
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
