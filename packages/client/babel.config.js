/**
 * To test that babel is working correctly, run
 * `./node_modules/.bin/babel src --out-dir lib`
 */

const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
  "@babel/react"
];

module.exports = { presets };
