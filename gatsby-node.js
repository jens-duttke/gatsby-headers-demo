/**
 * @type {import('gatsby').GatsbyNode}
 */
module.exports = {
	onCreateWebpackConfig ({ actions, getConfig }) {
		/** @type {import('webpack').Configuration} */
		const config = getConfig();

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
