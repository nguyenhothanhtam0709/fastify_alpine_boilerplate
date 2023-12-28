import concurrently from "concurrently"

concurrently(
  [
    { command: 'yarn build:client', name: 'client', prefixColor: "green" },
    { command: 'yarn build:server', name: 'server', prefixColor: "blue" },
    { command: 'yarn build:tailwind', name: 'tailwind', prefixColor: "yellow" },
  ],
  {
    prefix: 'name',
    killOthers: ['failure'],
    cwd: process.cwd(),
    maxProcesses: 3,
  },
);