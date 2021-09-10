// module.exports = {
//     mode: 'none'
// }

// module.exports = () => ({
//     output: {
//         filename: 'bundle.js'
//     }
// })

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const path = require('path')

module.exports = ({ mode }) => {
    console.log(mode)
    return {
        mode, // using destructuring
        output: {
            filename: 'bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new webpack.ProgressPlugin()
        ],
        // devServer: {
        //     static: {
        //         directory: path.join(__dirname, 'src'),
        //     },
        //     compress: true,
        //     port: 9000,
        // },
    }
}