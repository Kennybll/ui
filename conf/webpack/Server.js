var srcPathAbsolute = __dirname + '/../../src' 
module.exports = {
  entry: "./src/server.js",
  target: "node",
  output: {
    publicPath: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'babel-loader',
        query: { presets: ['es2015'] }
      },
      {
        test: /^.((?!cssmodule).)*\.css$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /^.((?!cssmodule).)*\.(sass|scss)$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /^.((?!cssmodule).)*\.less$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'less-loader', options: {
            javascriptEnabled: true
          } }
        ]
      },
      {
        test: /^.((?!cssmodule).)*\.styl$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'stylus-loader' }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        loaders: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.cssmodule\.(sass|scss)$/,
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.cssmodule\.css$/,
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.cssmodule\.less$/,
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader' },
          { loader: 'less-loader', options: {
            javascriptEnabled: true
          } }
        ]
      },
      {
        test: /\.cssmodule\.styl$/,
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            }
          },
          { loader: 'postcss-loader' },
          { loader: 'stylus-loader' }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      actions: `${ srcPathAbsolute }/actions/`,
      components: `${ srcPathAbsolute }/components/`,
      config: `${ srcPathAbsolute }/config/dist.js`,
      images: `${ srcPathAbsolute }/images/`,
      sources: `${ srcPathAbsolute }/sources/`,
      stores: `${ srcPathAbsolute }/stores/`,
      styles: `${ srcPathAbsolute }/styles/`
    },
    extensions: [
      '.js',
      '.jsx'
    ],
    modules: [
      srcPathAbsolute,
      'node_modules'
    ]
  }
}