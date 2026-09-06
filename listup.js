import { expandGlobSync } from "jsr:@std/fs";

function calcFiles(globPath) {
  let size = 0;
  const files = expandGlobSync(globPath, { globstar: true });
  for (const _file of files) size++;
  return size;
}

function calcMaxSize(globPath) {
  let maxSize = 0;
  const files = expandGlobSync(globPath, { globstar: true });
  for (const file of files) {
    const fileSize = Deno.statSync(file.path).size;
    if (maxSize < fileSize) maxSize = fileSize;
  }
  return maxSize;
}

function calcTotalSize(globPath) {
  let totalSize = 0;
  const files = expandGlobSync(globPath, { globstar: true });
  for (const file of files) {
    const fileSize = Deno.statSync(file.path).size;
    totalSize += fileSize;
  }
  return totalSize;
}

const db = JSON.parse(Deno.readTextFileSync("docs/list.json"));
db.forEach((info) => {
  const files = calcFiles(`docs/${info.name}/**/*.sf3`);
  const gmSize = calcTotalSize(`docs/${info.name}/{000,128}/*.sf3`);
  const fullSize = calcTotalSize(`docs/${info.name}/**/*.sf3`);
  const maxSize = calcMaxSize(`docs/${info.name}/**/*.sf3`);
  info.files = files;
  info.gmSize = Math.round(gmSize / 1024 / 1024);
  info.fullSize = Math.round(fullSize / 1024 / 1024);
  info.maxSize = Math.round(maxSize / 1024 / 1024);
});
Deno.writeTextFileSync("docs/list.json", JSON.stringify(db, null, "\t"));
