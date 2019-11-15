 ### 初始化 package.json
 > npm init 或者 npm init -y ,其中 -y 表示默认

 ### 安装webpack webpack-cli
 >npm i webpack webpack-cli -D 或者 npm i webpack webpack-cil --save-dev
 >--save-dev 的简写 -D

 ### 创建webpack配置文件
 >webpack.config.js

 ### 在webpack.json文件的script写入打包命令
 >"build":"webpack --config=webpack.config.js"

 ### loader处理css 插件
 >npm i style-loader css-loader -D

 ### loader处理less 插件
 > npm i style-loader css-loader less-loader less -D

 ### 分离css 插件
 > npm i mini-css-extract-plugin -D

 ### 处理图片 插件
 >npm i file-loader url-loader -D

 ### 处理html 插件
 >npm i html-webpack-plugin -D

 ### 处理html模板的图片 插件
 >npm i html-withimg-loader -D

 #### webpack.config.js
 >1.导入路径
 >let path = require('path)

 >2.暴露文件
 >module.exports ={}
