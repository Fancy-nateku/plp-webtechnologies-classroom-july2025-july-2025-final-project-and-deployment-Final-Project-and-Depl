require("esbuild")
  .build({
    entryPoints: ["index.tsx"],
    bundle: true,
    outfile: "dist/bundle.js",
    platform: "browser",
    target: "es2020",
  })
  .then(() => {
    console.log("Build completed successfully!");
  })
  .catch((e) => {
    console.error("Build failed:", e);
    process.exit(1);
  });