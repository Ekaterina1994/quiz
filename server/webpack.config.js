import path from "path";
import nodeExternals from "webpack-node-externals";
import WebpackShellPlugin from "webpack-shell-plugin";

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  entry: "server.ts",
  mode,
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "source-map",

  devServer: {
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  externals: [nodeExternals()],
  watch: NODE_ENV === "development",
  plugins: [
  ]
};
