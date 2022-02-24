const IMAGE_DIRECTORY = "./_site/img/generated";
const IMAGE_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

module.exports = {
  // Restore file/directory cached in previous builds.
  // Does not do anything if:
  //  - the file/directory already exists locally
  //  - the file/directory has not been cached yet
  async onPreBuild({ utils }) {
    await utils.cache.restore(IMAGE_DIRECTORY);
  },
  // Cache file/directory for future builds.
  // Does not do anything if:
  //  - the file/directory does not exist locally
  async onPostBuild({ utils }) {
    await utils.cache.save(IMAGE_DIRECTORY, {
      ttl: IMAGE_TTL_SECONDS
    });
  }
};