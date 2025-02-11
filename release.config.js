
const customTransform = require("./commit-transform");
const plugins = require("./plugins");


module.exports = {
	releaseRules: plugins[0][1].releaseRules,
	parserOpts: {
		mergePattern: /^Merge pull request #(\d+) from (.*)$/,
		mergeCorrespondence: ["id", "source"]
	},
	writerOpts: { transform: customTransform },
	plugins
};
