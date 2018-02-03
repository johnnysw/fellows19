<template>
    <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
    </swipe>
</template>

<script>
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
export default {
  components: {
    swipe: Swipe,
    "swipe-item": SwipeItem
  }
};
</script>

<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-image: url('https://img3.doubanio.com/lpic/s27102925.jpg');
  color: #fff;
}

.slide2 {
  background-image: url('https://img3.doubanio.com/lpic/s6989253.jpg');
  color: #000;
}

.slide3 {
  background-image: url('https://img3.doubanio.com/lpic/s24468373.jpg');
  color: #fff;
}
</style>
