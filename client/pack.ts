import * as esbuild from "npm:esbuild@0.20.2";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.11.0";
const entryPoints = [
  "client/mod.ts",
];

const bundle = await esbuild.build({
  plugins: [...denoPlugins()],
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
  write: true,
});

// console.log(bundle.outputFiles)
// console.log(bundle.errors)
esbuild.stop();
