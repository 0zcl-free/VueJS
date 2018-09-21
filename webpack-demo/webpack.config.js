const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  //配置入口文件
  entry:'./main.js',
  //配置入口文件输出位置
  output:{
    path:__dirname, //项目根路径
    filename:'build.js'
  },
  mode: 'development',
  plugins: [
    new VueLoaderPlugin()
  ],
  // mode: 'development',
  //配置模块加载器
  module: {
    // 这里用来配置处理不同后缀文件所使用的loader
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,  //所有以.js结尾的文件都由babel-loader加载，除了node_modules以外
        loader: 'babel-loader',
        exclude:/node_modules/
      },
      {
        test: /\.css$/, // Only .css files
        use: ['vue-style-loader','css-loader'],
        exclude:/node_modules/
      }
    ]
  }
}