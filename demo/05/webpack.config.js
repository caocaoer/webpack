module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8129'
        }]
    }
};