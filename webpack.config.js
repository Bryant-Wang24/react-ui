const path = require('path')
module.exports = {
    mode:'production',
    entry:{
        light:'./lib/index.tsx'
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
    }
}