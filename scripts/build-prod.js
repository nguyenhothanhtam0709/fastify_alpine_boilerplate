import concurrently from "concurrently"
import { writeFile } from "fs/promises"
import { resolve } from "path";

const kOutDir = "dist"

async function execute() {
  const { result } = concurrently(
    [
      { command: 'node_modules/.bin/tsc -p tsconfig.build.json', name: 'client', prefixColor: "green" },
      { command: 'node_modules/.bin/esbuild ./src/client/main.ts --bundle --minify --outfile=./dist/public/main.js', name: 'server', prefixColor: "blue" },
      { command: 'node_modules/.bin/tailwindcss -i ./src/client/main.css -o ./dist/public/main.css --minify', name: 'tailwind', prefixColor: "yellow" },
    ],
    {
      prefix: 'name',
      killOthers: ['failure'],
      cwd: process.cwd(),
      maxProcesses: 3,
    },
  );

  await result;

  await writeFile(
    resolve(process.cwd(), `${kOutDir}/package.json`)
    , `
{
  "type": "module",
  "main" :"${kOutDir}/server/main.js"
}
`)
}

execute();