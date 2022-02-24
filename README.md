# Re-use Eleventy Image Disk Cache across Netlify Builds

This repository takes all of the [high resolution browser logos](https://github.com/alrra/browser-logos) and processes them through Eleventy Image, writing directly to the Eleventy output directory at `_site/img/generated/`.

## Benchmarks:

AVIF and PNG formats, at a 40px width.

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