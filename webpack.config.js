const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	mode: "development",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
		publicPath: "/",
	},
	resolve: {
		alias: {
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@layouts": path.resolve(__dirname, "./src/layouts"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@store": path.resolve(__dirname, "./src/store"),
			"@services": path.resolve(__dirname, "./src/services"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@constants": path.resolve(__dirname, "./src/constants"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@assets": path.resolve(__dirname, "./src/assets"),
		},
		extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
	},
	target: "web",
	module: {
		rules: [
			{
				test: /\.(css)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
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
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: "ts-loader",
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
		new Dotenv({
			path: "./.env",
		}),
	],
};
