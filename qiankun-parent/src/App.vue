<template>
  <div class="sen-container">
    <el-container style="height: 100%;width:100%;">
      <el-header>
        <div class="sen-header">
          <img src="./assets/images/logo.png" alt="">
          <h1>Qiankun-Project</h1>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :router="true">
            <!--基座中可以放自己的路由-->
            <el-menu-item index="/"><i class="el-icon-s-home"></i><span slot="title">首页</span></el-menu-item> 
            <!--引用其他子应用-->
            <el-menu-item index="/qiankun-child-vue"><i class="el-icon-platform-eleme"></i><span slot="title">Vue项目</span></el-menu-item>
            <el-menu-item index="/child-app1"><i class="el-icon-platform-eleme"></i><span slot="title">另一台服务器项目</span></el-menu-item>
            
          </el-menu>
        </el-aside>
        <el-main>
          <router-view ></router-view>
          <div id="container"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  mounted () {}
}
</script>


<style scoped>
.sen-header {
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
}
.sen-header h1 {
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
}
.sen-header img {
  width: 36px;
  height: 36px;
  margin-right: 10px;
}
#container {
  transform: translateZ(1px);
}
</style>
