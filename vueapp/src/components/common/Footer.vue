<template>
  <ul class="footer" :style="{backgroundColor:bgColor}">
      <li><router-link to="/">电影</router-link></li>
      <li><router-link to="/music">音乐</router-link></li>
      <li><router-link to="/book">书籍</router-link></li>
      <li><router-link to="/photo">图片</router-link></li>
  </ul>
</template>

<script>
export default {
  props: ["bgColor"]
};
</script>

<style scoped>
.footer {
  height: 1rem;
  /* background-color: rgb(33, 150, 243); */
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  line-height: 1rem;
}

.footer li {
  flex-grow: 1;
  text-align: center;
}

.footer li a {
  color: #ccc;
}

.footer li a.router-link-exact-active {
  color: #fff;
}
</style>
