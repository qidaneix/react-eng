const HtmlWebpack = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.tsx"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },
  mode: "production",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx?$/,
        use: [{ loader: "eslint-loader" }]
      },
      {
        test: /\.tsx?$/,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
      }
    ]
  },
  plugins: [
    new HtmlWebpack({
      template: "index.html"
    })
  ]
};
