<template>
    <div>
        <h1 class="hw">hello world</h1>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '这是测试组件'
    }
  }
}
</script>

<style scoped>
.hw{
    background: #ff0000;
}
</style>

