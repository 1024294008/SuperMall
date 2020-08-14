const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': path.join(__dirname, 'src/assets'),
        'common': path.join(__dirname, 'src/common'),
        'components': path.join(__dirname, 'src/components'),
        'network': path.join(__dirname, 'src/network'),
        'views': path.join(__dirname, 'src/views')
      }
    }
  }
}
