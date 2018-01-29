<template>
    <div>
        <h1>这是子路由1</h1>
        <h1>名字是：{{ $route.params.username }}</h1>
        <h1>年龄是：{{ $route.params.age }}</h1>
    </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("进入之前");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("离开之前");
    next();
  },
   beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
};
</script>

<style scoped>

</style>


