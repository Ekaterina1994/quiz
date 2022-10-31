import path from "path";
import { fileURLToPath } from 'url';
console.log('webpack works!');
// import nodeExternals from "webpack-node-externals";
// import WebpackShellPlugin from "webpack-shell-plugin";
// import UglifyJsPlugin from "uglifyjs-webpack-plugin";

// const BUILD_DIRECTORY = path.dirname('./build');

// let NODE_ENV = "development";
// if (process.env.NODE_ENV === "production") {
//   NODE_ENV = "production";
// }

// export default {
//   entry: "./server.ts",
//   mode: NODE_ENV,
//   target: "node",
//   output: {
//     path: BUILD_DIRECTORY,
//     filename: "./server.js",
//     clean: true,
//   },
//   resolve: {
//     extensions: [".ts", ".js"],
//   },
//   devtool: "source-map",
//   devServer: {
//     hot: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: ["ts-loader"],
//       },
//     ],
//   },
//   // optimization: {
//   //   // minimizer: [new UglifyJsPlugin({
//   //   //   // sourceMap: true,
//   //   //   // compress: {
//   //   //   //   warnings: false,
//   //   //   // }
//   //   // })],
//   // },
//   externals: [nodeExternals()],
//   watch: NODE_ENV,
//   plugins: [
//     new WebpackShellPlugin({
//       onBuildStart: ["pnpm run start"],
//     }),
//   ],
// };

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


export default {
  mode: 'development',
  entry: {
      'index': './index.ts',
  },
  target: 'node',
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
          }
      ]
  },
  resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './js'),
  }
};