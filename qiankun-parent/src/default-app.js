let apps
if (process.env.NODE_ENV === 'production') {
  // 打包 部署的配置
  apps = [ 
    {
      name:'qiankun-child-vue', // 应用的名字
      entry:'/child/vue1/', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
      container:'#container', // 容器名
      activeRule:'/vue1' // 激活的路径
    }
  ]
} else {
  // 开发运行配置
  apps = [ 
    {
      name:'qiankun-child-vue', // 应用的名字
      entry:'//localhost:10002', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
      container:'#container', // 容器名
      activeRule:'/qiankun-child-vue' // 激活的路径
    },
    {
      name:'qiankun-child-react', // 应用的名字
      entry:'//localhost:3000', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
      container:'#container', // 容器名
      activeRule:'/qiankun-child-react' // 激活的路径
    }
  ]
}

export default apps