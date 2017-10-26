const path = require('path');

module.exports = (config, environment) => {
	config.module.rules = [
		{
			test: /\.ts(x)?$/,
			use: [{
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
			}]
		},
	];

	config.resolve.extensions = [
		'.ts',
		'.tsx',
		'.js',
		'.json',
		'.web.ts',
		'.web.tsx',
		'.web.js',
	];
	return config;
};
