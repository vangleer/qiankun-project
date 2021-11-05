module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/child-vue' : '/',
  devServer:{
      port: 10002,
      headers: {
          'Access-Control-Allow-Origin':'*' // 允许跨域
      }
  },
  configureWebpack:{
      output: {
          library:'qiankun-child-vue', // 项目名称
          libraryTarget:'umd'
      }
  }
}