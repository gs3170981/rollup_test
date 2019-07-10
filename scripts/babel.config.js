const presets = ["@babel/preset-env"];
const plugins = [
  ["@babel/plugin-transform-runtime", {
    // corejs: 3
  }]
]
export default {
  exclude: 'node_modules/**',
  runtimeHelpers: true,
  presets,
  plugins
};

// module.exports = {
//   presets,
//   plugins
// };