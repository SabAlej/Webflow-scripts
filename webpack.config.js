const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    ['global']: './src/index.js',
    // ['home']: './src/home.js',
    // ['about']: './src/about.js',
    // ['contact']: './src/contact.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'babel-loader'],
      },
    ],
  },
};
