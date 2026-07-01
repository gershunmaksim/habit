module.exports = {
  presets: [
    "module:@react-native/babel-preset",
    "nativewind/babel",
  ],

  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          assets: "./src/assets",
        },
        extensions: [
          ".ios.js",
          ".android.js",
          ".js",
          ".ts",
          ".tsx",
          ".json",
          ".svg",
        ],
      },
    ],

    "react-native-worklets/plugin",
  ],
};