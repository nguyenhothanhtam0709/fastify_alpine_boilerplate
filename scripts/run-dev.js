import concurrently from "concurrently"

concurrently(
  [
    { command: 'node_modules/.bin/esbuild ./src/client/main.ts --bundle --watch --outfile=./dist/public/main.js', name: 'client main.js', prefixColor: "green" },
    { command: 'node_modules/.bin/esbuild ./src/client/chat.ts --bundle --watch --outfile=./dist/public/chat.js', name: 'client chat.js', prefixColor: "green" },
    { command: 'node --loader ts-node/esm --watch src/server/main.tsx', name: 'server', prefixColor: "blue" },
    { command: 'node_modules/.bin/tailwindcss -i ./src/client/main.css -o ./dist/public/main.css --watch', name: 'tailwind', prefixColor: "yellow" },
  ],
  {
    prefix: 'name',
    killOthers: ['failure'],
    restartTries: 3,
    cwd: process.cwd(),
    maxProcesses: 3
  },
);