const webpack = require("webpack");

module.exports = {
  mode: "developement",
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("vaibhav"),
    }),
  ],
};
