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
            "/qiankun-child-vue/api": {
                target: "http://192.168.0.193:7001", // Vue项目
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/qiankun-child-vue/api": ""
                }
            },
            "/qiankun-child-react/api": {
                target: "http://localhost:7002/", // React项目
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/qiankun-child-react/api": ""
                }
            }
        }
    }
}