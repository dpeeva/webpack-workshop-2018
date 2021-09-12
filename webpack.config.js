const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')

const modeConfig = mode => require(`./build-utils/webpack.${mode}`)(mode)

// SETTING DEFAULT VALUES { mode, presets } = { mode: 'production', presets: [] } => NOT WORKING
module.exports = ({ mode = 'production', presets = [] }) =>
    webpackMerge.merge(
        {
            mode,
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/,
                        use: [{
                            loader: 'url-loader',
                            options: {
                                limit: 5000
                            }
                        }]
                    }
                ]
            },
            output: {
                filename: 'bundle.js'
            },
            plugins: [
                new HtmlWebpackPlugin(),
                new webpack.ProgressPlugin()
            ],
        },
        modeConfig(mode)
    )