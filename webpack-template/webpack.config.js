const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    open: true
  },
  plugins: [
    new CopyPlugin([{ from: './src/assets', to: 'assets' }]),
    // This handles routing, for each page, instantiate another HtmlWebpackPlugin object
    new HtmlWebpackPlugin({
      template: './src/views/index.pug',
      filename: 'index.html', // the file to write the html to
      title: 'PROJECT NAME - HOME',
      inject: 'head', // where to inject the js, head or body
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/views/another-page-template.pug',
      filename: 'another-page-template.html', // the file to write the html to
      title: 'PROJECT NAME - PAGE',
      inject: 'head', // where to inject the js, head or body
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  module: {
    rules: [
      {
        // transpiles ts to js
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        // transpiles pug
        test: /\.pug/,
        use: ['pug-loader']
      },
      {
        // transpiles css to js (keep this if you want to use css instead of scss)
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        // transpiles scss to css then js
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { 
        // allows you to use svg inside your scss sheets
        test: /\.svg/, 
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
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
