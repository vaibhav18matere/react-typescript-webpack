module.exports = {
  mode: "producction",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("matere"),
    }),
  ],
};
