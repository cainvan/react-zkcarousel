var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'lib'),
        // 组件采用UMD格式打包
        libraryTarget: "umd",
        // 组件名称
        library: "react-zkcarousel",
        filename:"index.js"
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style!css"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets:['react','es2015','stage-2']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    //externals使用场景是外部依赖不需要打包进去
    externals: [
        {
            'react': {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            },
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        }
    ],

    node: {
        Buffer: false
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
