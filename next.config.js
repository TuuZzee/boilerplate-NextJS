require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
	crossOrigin: 'anonymous',
	webpack: config => {
		config.plugins = config.plugins || [];

		config.plugins = [
			...config.plugins,

			// Read the .env file
			new Dotenv({
				path: path.join(__dirname, '.env'),
				systemvars: true
			})
		];

		config.module.rules.push(
			{
				test: /\.(css|scss)/,
				loader: 'emit-file-loader',
				options: {
					name: 'dist/[path][name].[ext]'
				}
			},
			{
				test: /\.css$/,
				loader: 'babel-loader!raw-loader'
			},
			{
				test: /\.scss$/,
				loader: 'babel-loader!raw-loader!sass-loader'
			}
		);

		return config;
	},
	exportPathMap: function() {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' }
		};
	}
};
