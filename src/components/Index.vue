<template>
  <div class="main">
    <loading :isOpen="isOpen"></loading>
    <div class="header">
        首页
        <router-link to="/wei">
          <i class="playMenu"><img src="../../static/menu.svg"></i>
        </router-link>
    </div>
    <div class="banner">
      <Swiperdiv v-bind:listImg="listImg"></Swiperdiv>
    </div>
    <div class="todayFood">
      <div class="todayFoodTop">
        <div class="title">今日食粮</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiperdiv from './swiper/swiper'
import loading from './Loading'
import axios from "axios"
export default {
  name: 'index',
  components: {
    Swiperdiv,
    loading
  },
  data () {
    return {
      isOpen: true,
    	listImg:[]
    }
  },
  mounted: function() {//相当于ready
    this.loadMore();
  },
  methods: {
    loadMore: function(){
       this.isOpen = true;
       axios.get(API_PROXY+'http://wshapi.weshuhui.com/api/indexes/v2')
        .then(function(res) {
          this.listImg = res.data.body.banners;
          this.isOpen = false;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
.banner{
  width: 100%;
  height: 3.2rem;
}
.header{
  width: 100%;
  height: 0.8rem;
  background: #fff;
  text-align: center;
  font-size: 0.36rem;
  line-height: 0.8rem;
  position: relative;
  font-weight: 800;
}
.playMenu{
  position: absolute;
  right: 0.2rem;
  top: 0;
  width: 0.5rem;
  height: 0.5rem;
  display: block;
  line-height: 0.8rem;
  margin-top: 0.1rem;
}
.playMenu img{
  width: 100%;
}
.todayFood{
  width: 96%;
  height: 4.8rem;
  background: #fff;
  border-top: 0.2rem solid #f2f2f2;
  padding: 0% 2%;
}
.todayFoodTop{
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
}
.todayFoodTop .title{
  text-align: left;
  font-size: 0.36rem;
  border-left: 0.08rem solid #00b650;
  text-indent: 0.1rem;
  font-weight: 800;
  height: 0.6rem;
  line-height: 0.6rem;
}
</style>
