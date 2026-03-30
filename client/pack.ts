import * as esbuild from "esbuild";
import { denoPlugins } from "@luca/esbuild-deno-loader";
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
