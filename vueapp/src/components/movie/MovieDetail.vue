<template>
    <div class="detail">
        <div class="detail-info">
            <div class="detail-img">
                <img :src="detail.img" alt="">
            </div>
            <div class="detail-content">
                <p class="detail-name">{{ detail.nm }}</p>
                <p>{{ detail.dir }}</p>
                <p>{{ detail.cat }}</p>
                <p>{{ detail.src }}</p>
                <p>{{ detail.rt }}</p>
            </div>
        </div>
        <div class="detail-star">
            <h3>主演</h3>
            <p>{{ detail.star }}</p>
        </div>
        <div>
            <h3>简介</h3>
            <div v-html="detail.dra"></div>
        </div>
        <div class="loading" v-show="isLoading">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      detail: {},
      isLoading: true
    };
  },
  created() {
    axios
      .get(
        `${API_PROXY}http://m.maoyan.com/movie/${
          this.$route.params.movieId
        }.json`
      )
      .then(res => {
        this.detail = res.data.data.MovieDetailModel;
        this.isLoading = false;
      })
      .catch(res => {
        alert("error");
      });
  }
};
</script>

<style scoped>
.detail {
  padding: 0.1rem;
}
.detail-info {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.1rem;
}
.detail-img {
  flex-grow: 1;
  width: 0;
  margin-right: 0.1rem;
}
.detail-content {
  flex-grow: 2;
  width: 0;
}
.detail-name {
  font-weight: bolder;
}

.detail h3 {
  text-align: center;
  font-weight: bolder;
}

.detail-star {
  border-bottom: 1px solid #ccc;
}
.loading {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
