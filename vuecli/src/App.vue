<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="home">首页</button>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
    </div>
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/test">Test</router-link>
      <router-link :to="{name:'test1', params: {username:'xiecheng', age: 32}}">子路由1</router-link>
      <router-link to="/test/test2">子路由2</router-link>
      <router-link to="/testUrl/5/zhangsan">测试URL</router-link>
      <router-link to="/home/8/lisi">重定向</router-link>
      <router-link to="/abc">alias</router-link>
      <router-link to="/couter">vuex</router-link>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    home(){
      // this.$router.push('/testUrl/5/zhangsan');
      this.$router.push({name:'test1', params: {username:'xiecheng', age: 32}});
    },
    back(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter{
  opacity: 0;
}

.fade-enter-to{
  opacity: 1;
}

.fade-enter-active{
  transition: opacity 1s;
}

.fade-leave{
  opacity: 1;
}

.fade-leave-to{
  opacity: 0;
}

.fade-leave-active{
  transition: opacity 1s;
}
</style>
