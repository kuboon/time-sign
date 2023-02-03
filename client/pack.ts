import * as esbuild from 'https://deno.land/x/esbuild@v0.17.5/mod.js';
const entryPoints = [
  'client/mod.ts'
]

const bundle = await esbuild.build({
  bundle: true,
  entryPoints,
  format: "esm",
  metafile: true,
  minify: true,
  outdir: "client",
  outfile: "",
  platform: "neutral",
  sourcemap: "linked",
  splitting: true,
  target: ["chrome99", "firefox99", "safari15"],
  treeShaking: true,
  write: true
});

// console.log(bundle.outputFiles)
// console.log(bundle.errors)
esbuild.stop()
