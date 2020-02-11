const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    open: true
  },
  plugins: [
    // This handles routing, for each page, instantiate another HtmlWebpackPlugin object
    new HtmlWebpackPlugin({
      template: './src/views/index.pug',
      filename: 'index.html', // the file to write the html to
      title: 'PROJECT NAME - HOME',
      inject: 'head', // where to inject the js, head or body
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/views/another-page-template.pug',
      filename: 'another-page-template.html', // the file to write the html to
      title: 'PROJECT NAME - PAGE',
      inject: 'head', // where to inject the js, head or body
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
    }),
  ],
  module: {
    rules: [
      {
        // transpiles pug
        test: /\.pug/,
        use: ['pug-loader']
      },
      {
        // transpiles css to js
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        // transpiles scss to css
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // twerk config for dev here
  }
  if (argv.mode === 'production') {
    // twerk config for prod here
  }
  return config;
};
