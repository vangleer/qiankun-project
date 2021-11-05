<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <button @click="search">发送请求 - 请求3001端口</button>
    <h2>{{ msg }}</h2>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      msg: ''
    }
  },
  created () {
    
  },
  methods: {
    async search() {
      const res = await axios.get('/qiankun-child-vue/api/hello')
      this.msg = res.data
      console.log(res)
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
