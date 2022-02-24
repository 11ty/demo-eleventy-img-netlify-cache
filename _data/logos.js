const glob = require("fast-glob");

module.exports = async function() {
  let rawFiles = await glob(["**/*.png"], {
    cwd: "node_modules/browser-logos/src/"
  });
  let filteredFiles = rawFiles.filter(entry => {
    return entry.match(/\_[\d]+x[\d]+/) === null;
  });

  console.log( `${filteredFiles.length} source images found.` );

  return filteredFiles.map(entry => {
    return {
      path: entry,
      alt: `Browser logo for ${entry}`,
    }
  });
};