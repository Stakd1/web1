//导入路径处理模块，nodejs自带核心模块。不需额外安装
let path = require('path');

//导入分离css插件
let miniCssExtractPlugin = require('mini-css-extract-plugin');

//导入处理html的模板
let htmlWebpackPlugin = require('html-webpack-plugin');

//暴露文件
module.exports = {
    //配置模式
    //develpment:开发模式
    //production：生产模式
    mode: 'development',

    //配置入口
    entry: {
        myapp: './app/app.js'
    },

    //配置输出文件路径
    output: {
        //打包输出的文件路径
        path: path.resolve(__dirname + '/build'),

        //输出文件重命名 //name=>app
        filename: '[name].min.js'
    },

    //配置loader
    //处理css,less
    module: {
        //定义loader规则
        rules: [
            //每一个对象就是一个loader规则
            //处理css
            {
                //匹配文件规则
                test: /\.css$/,
                use: [
                    // { loader: 'style-loader' },
                    { loader: miniCssExtractPlugin.loader },
                    { loader: 'css-loader' }
                ]
            },

            //处理less
            {
                test: /\.less$/,
                use: [
                    //分离css
                    { loader: miniCssExtractPlugin.loader },
                    { loader: 'less-loader' },
                    { loader: 'css-loader' }
                ]
            },

            //处理图片
            {
                test: /\.(png|gif|jpg|jpeg)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //如果图片小于等与1000B,图片被转为base64
                            limit: 1000
                        }
                    }
                ]
            },

            //处理html模板的图片
            {
                test:/\.html?$/,
                use:[
                    {loader:'html-withimg-loader'}
                ]
            }



        ]
    },


    // 配置插件
    plugins: [

        //实例化分离css的插件
        new miniCssExtractPlugin({
            //输出的文件名
            filename: '[name].min.css'
        }),

        //实例化处理html模板插件
        new htmlWebpackPlugin({
            //处理模板的路径
            template:'./app.html',

            inject:'body',

            //最小化
            minify:{
                removeComments:true,
                removeAttributeQuotes:true,
                collapseWhitespace:true
            },

            //输出文件重命名
            filename:'app.min.html'
        })

    ]
};