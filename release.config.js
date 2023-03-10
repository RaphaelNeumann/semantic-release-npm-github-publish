
const customTransform = require("./commit-transform");
const relese_plugin = ['@semantic-release/release-notes-generator', {
      writerOpts: {
        transform: (commit, context) => customTransform,
      }
    }]
const plugins = [...require("./plugins") ...relese_plugin];


module.exports = {
	releaseRules: plugins[0][1].releaseRules,
	parserOpts: {
		mergePattern: /^Merge pull request #(\d+) from (.*)$/,
		mergeCorrespondence: ["id", "source"]
	},
	writerOpts: { transform: customTransform },
	plugins
};
