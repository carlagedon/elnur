const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundele.[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        port: 3000
    }
}