module.exports = {
    // 基本路径  
    publicPath: './',
    // 输出路径   
    outputDir: 'dist',
    // 静态资源    
    assetsDir: './',
    // eslint-loader是否在保存时候检查  
    lintOnSave: true,
    // 服务项配置    
    devServer: {
        // 设置代理proxy
        proxy: {
            "/vue1": {
                target: "http://192.168.0.193:7004", // 项目1
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/vue1": "" // 去掉接口地址中的api字符串
                }
            }
        }
    }
}