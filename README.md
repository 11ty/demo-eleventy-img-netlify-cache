# Re-use Eleventy Image Disk Cache across Netlify Builds

* [Live Demo](https://demo-eleventy-img-netlify-cache.netlify.app/)

This repository takes all of the [high resolution browser logos](https://github.com/alrra/browser-logos) and processes them through Eleventy Image, writing output images directly to the Eleventy output directory at `_site/img/generated/`.

Customize the Cache Directory (default `_site/img/generated/`) in:
1. [`plugins/custom-cache/index.js`](https://github.com/11ty/demo-eleventy-img-netlify-cache/blob/main/plugins/custom-cache/index.js)
    * Also `ttl`: how long these images are kept.
1. [`.eleventy.js`](https://github.com/11ty/demo-eleventy-img-netlify-cache/blob/main/.eleventy.js)

## Benchmarks:

222 source images, outputs AVIF and PNG formats at 40px width.

### Local

Cold start:

```
[11ty] Writing _site/index.html from ./index.liquid
[11ty] Wrote 1 file in 13.05 seconds (v1.0.0)
```

Warm start:

```
[11ty] Writing _site/index.html from ./index.liquid
[11ty] Wrote 1 file in 1.64 seconds (v1.0.0)
```

### Netlify servers

Cold start:

```
[11ty] Writing _site/index.html from ./index.liquid
[11ty] Wrote 1 file in 27.59 seconds (v1.0.0)
```

Warm start:

```
[11ty] Writing _site/index.html from ./index.liquid
[11ty] Wrote 1 file in 4.01 seconds (v1.0.0)
```