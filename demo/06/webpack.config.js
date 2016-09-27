module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules'
        }]
    }
};