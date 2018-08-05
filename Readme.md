# Simple Frontmatter Loader

A simple webpack loader for frontmatter. Turns frontmatter into exports.

```
npm install --save-dev simple-frontmatter-loader
```

## Usage

Example webpack config:

```
	module: {
		rules: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: [
				'babel-loader',
				'frontmatter-loader',
			]
		},
		{
			test: /\.mdx?$/,
			use: [
				'babel-loader',
				'@mdx-js/loader',
				'frontmatter-loader',
			]
		},
		{
			test: /\.html$/,
			use: [
				{
					loader: 'frontmatter-loader',
					options: {
						use: [{ loader: 'html-loader', options: { exportAsEs6Default: 'es6' } }]
					}
				}
			]
		},
		]
	},
```
