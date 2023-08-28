import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: path.resolve(__dirname, "client/src/index.js"),

  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },

  mode: process.env.NODE_ENV || "production",
  devServer: {
    host: "localhost",
    port: 3040,
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,
    compress: true,

    static: {
      // match the output path
      directory: path.resolve(__dirname, "client/dist"),
      // match the output 'publicPath'
      publicPath: "/",
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
