
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    pigUI: './lib/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'pigUI',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}
