import concurrently from "concurrently"

concurrently(
  [
    { command: 'yarn watch:client', name: 'client', prefixColor: "green" },
    { command: 'yarn watch:server', name: 'server', prefixColor: "blue" },
    { command: 'yarn watch:tailwind', name: 'tailwind', prefixColor: "yellow" },
  ],
  {
    prefix: 'name',
    killOthers: ['failure'],
    restartTries: 3,
    cwd: process.cwd(),
    maxProcesses: 3
  },
);