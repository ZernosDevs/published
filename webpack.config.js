const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry point file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    historyApiFallback: true, // This tells webpack-dev-server to fallback to index.html for all routes
    port: 3000, // Port where your app will run
    open: true, // Open the browser after the server starts
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Add more rules here if needed (e.g., for CSS, images)
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // File extensions to handle
  },
};
