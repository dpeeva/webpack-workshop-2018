const MiniCssExractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
    output: {
        filename: 'bundle.js' // '[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExractPlugin()
    ]
})