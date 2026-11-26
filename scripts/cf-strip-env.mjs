// OpenNext copies every value in the .env* files into the built Worker. Keep only
// the public ones there; server secrets come from `wrangler secret put` in
// production and from .dev.vars in local preview.
import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const file = ".open-next/cloudflare/next-env.mjs";
const modes = await import(pathToFileURL(file).href);

const output = Object.entries(modes)
  .map(([mode, vars]) => {
    const publicOnly = Object.fromEntries(
      Object.entries(vars).filter(([key]) => key.startsWith("NEXT_PUBLIC_")),
    );
    return `export const ${mode} = ${JSON.stringify(publicOnly)};`;
  })
  .join("\n");

writeFileSync(file, output + "\n");

if (/RESEND|SECRET|TOKEN/.test(readFileSync(file, "utf8"))) {
  throw new Error(`A secret is still present in ${file}`);
}
