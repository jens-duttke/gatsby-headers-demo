module.exports = {
	root: true,
	extends: [
		require.resolve('linter-bundle/eslint'),
		require.resolve('linter-bundle/eslint/overrides-type-declarations'),
		require.resolve('linter-bundle/eslint/overrides-worker'),
		require.resolve('linter-bundle/eslint/overrides-react'),
		require.resolve('linter-bundle/eslint/overrides-gatsby'),
		require.resolve('linter-bundle/eslint/overrides-javascript'),
		require.resolve('linter-bundle/eslint/overrides-jest')

	],
	ignorePatterns: [
		'public/',
		'static/**/*.js'
	],
	overrides: [
		{
			files: ['*.js'],
			rules: {
				// Temporary disabled
				'no-console': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off'
			}
		}
	]
};
