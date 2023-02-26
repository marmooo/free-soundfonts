import { expandGlobSync } from "https://deno.land/std/fs/expand_glob.ts";

const db = JSON.parse(Deno.readTextFileSync("docs/list.json"));
db.forEach((info) => {
  let totalSize = 0;
  const globPath = `docs/${info.name}/*.sf3`;
  const globSync = expandGlobSync(globPath, { globstar: true });
  for (const file of globSync) {
    const fileSize = Deno.statSync(file.path).size;
    totalSize += fileSize;
  }
  info.size = Math.round(totalSize / 1024 / 1024);
});
Deno.writeTextFileSync("docs/list.json", JSON.stringify(db, null, "\t"));
