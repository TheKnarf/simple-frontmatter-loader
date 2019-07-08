# Simple Frontmatter Loader

[![NpmVersion](https://img.shields.io/npm/v/simple-frontmatter-loader.svg)](https://www.npmjs.com/package/simple-frontmatter-loader)

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
			'simple-frontmatter-loader',
		]
	},
	{
		test: /\.mdx?$/,
		use: [
			'babel-loader',
			'@mdx-js/loader',
			'simple-frontmatter-loader',
		]
	},
	{
		test: /\.html$/,
		use: [{
			loader: 'simple-frontmatter-loader',
			options: {
				use: [{ loader: 'html-loader', options: { exportAsEs6Default: 'es6' } }]
			}
		}]
	},
	]
},
```
