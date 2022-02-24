const glob = require("fast-glob");

module.exports = async function() {
  let rawFiles = await glob(["**/*.png"], {
    cwd: "node_modules/browser-logos/src/"
  });
  return rawFiles.filter(entry => {
    return entry.match(/\_[\d]+x[\d]+/) === null;
  }).map(entry => {
    return {
      path: entry,
      alt: `Browser logo for ${entry}`,
    }
  });
};