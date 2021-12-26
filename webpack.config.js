const path = require('path')
module.exports = {
    entry:{
        light:'./lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
}