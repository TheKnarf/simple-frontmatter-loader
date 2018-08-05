const frontmatter = require('front-matter'),
		{ getOptions } = require('loader-utils');

module.exports = function(content) {
	var callback = this.async();
	const options = getOptions(this);

	var json = frontmatter(content);
	var updatedContent = '';

	if(Object.keys(json.attributes).length !== 0)
		updatedContent += `export const frontmatter = ${JSON.stringify(json.attributes)};`

	if(typeof (options||{}).use !== 'undefined') {
		const { runLoaders } = require("loader-runner");
		var tmpFs = new (require('memory-fs'));
		tmpFs.writeFileSync('/dummy', json.body);

		runLoaders(
			{
				resource: '/dummy',
				loaders: options.use,
				readResource: tmpFs.readFile.bind(tmpFs)
			},
			(err, result) => {
				if(err)
					return console.error(err);
				
				callback(null, updatedContent + "\n" + result.result.join("\n"));
			}
		)
	} else {
		updatedContent += "\n" + json.body;
		callback(null, updatedContent);
	}
}
