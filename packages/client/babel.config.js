module.exports = function() {
  const plugins = [];
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
    "@babel/preset-react"
  ];
  return { plugins, presets }
}