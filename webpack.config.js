const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'production',
    entry:{
        light:'./lib/index.d.tsx'
    },
    output: {
        path: path.resolve(__dirname,'dist/lib'),
        library: 'WUI',
        libraryTarget: "umd"//输出格式
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "小王",
            template: 'index.html'
        })
    ]
}