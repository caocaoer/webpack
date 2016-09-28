var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
            NAME: JSON.stringify('caocao')
        })
    ]
};