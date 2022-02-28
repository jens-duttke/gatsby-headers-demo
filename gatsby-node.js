/**
 * @type {import('gatsby').GatsbyNode}
 */
module.exports = {
	onCreateWebpackConfig ({ actions, getConfig }) {
		/** @type {import('webpack').Configuration} */
		const config = getConfig();

		if (!('devServer' in config)) {
			config.devServer = {};
		}

		config.devServer = {
			...config.devServer,
			headers: {
				...config.devServer?.headers,
				'Cross-Origin-Embedder-Policy': 'require-corp',
				'Cross-Origin-Opener-Policy': 'same-origin'
			}
		};

		actions.replaceWebpackConfig(config);
	}
};
