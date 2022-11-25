import path from "path";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import NodemonPlugin from "nodemon-webpack-plugin";

const BUILD_DIRECTORY = path.resolve("./build");

let NODE_ENV = "development";
if (process.env.NODE_ENV === "production") {
  NODE_ENV = "production";
}

export default {
  mode: NODE_ENV,
  entry: {
    index: "./web/index.ts",
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
    extensions: [".ts", ".js"],
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
  plugins: [
    new NodemonPlugin(),
  ],
};
