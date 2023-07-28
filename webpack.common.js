const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './index.tsx',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader', // Babel과 함께 사용
					},
					{
						loader: 'ts-loader', // TypeScript를 JS로 변환
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new CleanWebpackPlugin(),
	],
};
