/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	developMiddleware: (app) => {
		app.use((req, res, next) => {
			console.log(`Request received for "${req.url}"`);

			res.set('Cross-Origin-Embedder-Policy', 'require-corp');
			res.set('Cross-Origin-Opener-Policy', 'same-origin');

			next();
		});
	},
	plugins: [
		'gatsby-plugin-webworker'
	]
};
