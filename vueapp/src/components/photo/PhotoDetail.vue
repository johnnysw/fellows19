<template>
  <!-- <h1>{{ $route.params.index }}</h1> -->
  <v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight" @tap="tap" class="container" :style="styleObj">
  </v-touch>
</template>

<script>
export default {
  data() {
    return {
      nowIndex: 0
    };
  },
  computed: {
    styleObj() {
      return `background: #000 url(${
        this.$store.state.photoList[this.nowIndex].src
      }) no-repeat center/contain `;
    }
  },
  created () {
      this.nowIndex = this.$route.params.index;
  },
  methods: {
    onSwipeLeft() {
      this.nowIndex--;
      if(this.nowIndex == -1){
          this.nowIndex = this.$store.state.photoList.length - 1;
      }
    },
    onSwipeRight() {
      this.nowIndex++;
      if(this.nowIndex === this.$store.state.photoList.length){
        this.nowIndex = 0;
      }
    },
    tap() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
