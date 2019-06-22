var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
//const APP_DIR = path.resolve(__dirname, "./app/");

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/dist/index.js",
  output: {
    path: __dirname + "/app/js",
    filename: "index.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};