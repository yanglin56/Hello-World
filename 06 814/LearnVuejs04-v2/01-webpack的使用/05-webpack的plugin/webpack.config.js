const path = require('path')
const webpack  = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')

module.exports = {
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    // publicPath:'dist/',
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        //css-loader只负责将css文件进行加载
        //style-loader负责将样式添加到DOM中
        //使用多个loader时，是从右向左
        use: ['style-loader','css-loader' ]
      },
      {
        test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            // loader: 'url-loader',
            loader: 'file-loader',
            options: {
              // 当加载的图片，小于limit时，会讲图片编译成base64字符串形式
              // 当加载的图片，大于limit时，需要使用file-loader来加载
              limit: 8192,
              name:'img/[name].[hash:8].[ext]'
            },
           
          }
        ]
      },
      {
        test: /\.js$/,
        //exclude:排除
        //include:包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          }
        }
      },
      {
        test:/\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve:{
    //alias:别名
    extensions:['.js','.css','.vue'],
    alias:{
       'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归coderwhy所有'),
    new HtmlWebpackPlugin({
      template:'index.html'
    }),
    new UglifyjsWebpackPlugin()
  ],
  devServer:{
    contentBase:'./dist',
    inline:true
  }
}