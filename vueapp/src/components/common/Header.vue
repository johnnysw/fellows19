<template>
  <div class="header" :style="{background: bgColor}">
      <span @click="$emit('home')" class="home" :style="{background: bgColor}">首页</span>
      <h2 class="title">
          <slot name="title">默认值</slot>
      </h2>
  </div>
</template>

<script>
export default {
  props: ['bgColor']
}
</script>

<style scoped>
.header{
    height: 1rem;
    line-height: 1rem;
    color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
}

.title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.home{
    color: #fff;
    margin-left: .1rem;
}
</style>
