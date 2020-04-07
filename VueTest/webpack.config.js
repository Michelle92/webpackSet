// 使用node的path模块
const path = require('path')

// 导入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 导入clean-webpack-plugin (加{}是 ES6 中的解构的语法, 作用是提取出 CleanWebpackPlugin 的构造函数)
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 导入webpack
const webpack = require('webpack')

//引入分离插件，需要安装
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // 模式
  mode: 'development',
  // 打包的入口
  entry: './src/main.js',
  // 打包的出口
  output: {
    filename: 'bunld.js',
    path: path.resolve(__dirname, 'dist')
  },
  // devServe配置
  devServer: {
    // 指定服务器根目录
    contentBase: './dist',
    // 自动打开浏览器
    open: true,
    // 打开网址的端口号
    port: 8080,
    host: '192.168.1.87',
    // // 热启动
    hot: true, // 让我们的webpack开启hot-module-replacment
    // hotOnly: true // 即使HMR没有生效，也不让浏览器进行自动的刷新
  },
  // 打包规则
  module: {
    rules: [
    	// 解析vue文件 
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 解析图片
      {
        test: /\.(jpg|jpeg|png|svg)$/,
	      loader: 'file-loader',
	      options: {
	      	name: '[name].[ext]' // 图片占位符
	      }
	    },
	    // 解析较小图片生成bsae64压缩到js中
	    {
	      test: /\.(jpg|jpeg|png|svg)$/,
	      loader: 'url-loader',
	      options: {
	        name: '[name].[ext]',
	        limit: 2048
	      }
	    },
	    // 解析css
	    {
		    test: /\.css$/,
		    use: ['style-loader', 'css-loader']
      },
     //解析less
      {
        test:/\.less$/,
        use: ExtractTextPlugin.extract([ 'css-loader', 'postcss-loader', 'less-loader' ])  //解析less使用的规则，从右到左执行，即先执行less-loader
      } 
    ]
  },

  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    // 指定生成 html 时, 以哪个文件为模板的
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    // 删除已生成的dist,重新生成dist
    new CleanWebpackPlugin(),
  
    //解析less并分离得到的css
    new ExtractTextPlugin('./index.css'),
    // webpack的热启动
    new webpack.HotModuleReplacementPlugin(), //添加
    new webpack.NamedModulesPlugin() //添加，官方推荐的帮助分析依赖的插件
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
}