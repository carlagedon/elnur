const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundele.js',
        path: path.resolve(__dirname, 'public')
    }
}