import path from "path";
console.log("webpack works!");
// import nodeExternals from "webpack-node-externals";
// import WebpackShellPlugin from "webpack-shell-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";

const BUILD_DIRECTORY = path.resolve("./build");

let NODE_ENV = "development";
if (process.env.NODE_ENV === "production") {
  NODE_ENV = "production";
}

export default {
  mode: NODE_ENV,
  entry: {
    index: "./index.ts",
  },
  target: "node",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: BUILD_DIRECTORY,
    clean: true,
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
        include: /\.min\.js$/
    })]
},
};
