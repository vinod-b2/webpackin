const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {

  entry: './src/components/index.tsx',
  
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[index].tsx',
 
  },

  resolve: {
    alias: {
      '@store': path.resolve(__dirname, '../src/store'),
    extensions: [".js", ".ts", ".tsx"],
  },
},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
