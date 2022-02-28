/**
 * @type {import('gatsby').GatsbyNode}
 */
module.exports = {
	onCreateWebpackConfig ({ actions, getConfig }) {
		/** @type {import('webpack').Configuration} */
		const config = getConfig();

		config.module.rules.push({
			test: /\.worker\.(js|ts|coffee)$/u,
			use: {
				loader: 'worker-loader',
				options: {
					filename: '[name].[contenthash].worker.js'
				}
			}
		});

		actions.replaceWebpackConfig(config);
	}
};
