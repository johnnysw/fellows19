<template>
    <ul class="clearfix">
       <li class="photo" v-for="(photo, index) in photoList" :key="index">
            <router-link :to="'/photodetail/'+index">
                <img :src="photo.src" alt="">   
            </router-link>
        </li> 
    </ul>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            photoList: []      
        }
    },
    created () {
        axios.get('/static/data/photodata.json').then(res=>{
            this.photoList = res.data.photoData;
            // 存储到vuex
            this.$store.dispatch('setPhotoListAction', res.data.photoData);
        }).catch(()=>{
            alert('读取数据失败');
        });
    }
};
</script>

<style scoped>
.photo{
    width: 50%;
    float: left;
}

.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
</style>
