<template>
    <div>
        <h1>{{ $store.state.count }}</h1>
        <h1>{{ count }}</h1>

        <button @click="$store.commit('add', 2)">加</button>
        <button @click="reduce">减</button>
        <button @click="addAction">addAction</button>
        <button @click="dis">dispatch</button>
    </div>
</template>


<script>
import store from "@/vuex/store.js";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  store,
  //     computed: {
  //     computedCount() {
  //       return this.$store.state.count;
  //     }
  //   }
  //   computed: mapState({
  //     computedCount: state => state.count
  //   })

  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count"])
  },
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction"]),
    dis(){
        this.$store.dispatch('addAction');
    }
  }
};
</script>

<style scoped>

</style>

