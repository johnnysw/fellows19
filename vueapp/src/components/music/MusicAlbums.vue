<template>
    <aplayer autoplay :music="musicList" v-if="loadSuccess" :showlrc="true" :mutex="true"></aplayer>
</template>

<script>
import Aplayer from "vue-aplayer";
import axios from "axios";
export default {
  components: {
    Aplayer
  },
  data() {
    return {
      musicList: [],
      loadSuccess: false
    };
  },
  created() {
    axios.get("/static/data/musicdata.json").then(res => {
      res.data.musicData.forEach(element => {
        this.musicList.push({
          title: element.title,
          author: element.author,
          url: element.src,
          pic: element.musicImgSrc,
          lrc: '/static/' + element.lrc
        });
      });
      this.loadSuccess = true;
    });
  }
};
</script>

<style scoped>
.aplayer{
    margin-top: 1rem;
}
</style>
