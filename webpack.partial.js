module.exports = {
  module: {
    rules: [
      {
        test: /\.png$/, // All images from the leaflet package
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true
            }
          }
        ]
      }
    ]
  }
}
