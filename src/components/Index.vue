<template>
	<Swiperdiv v-bind:listImg="listImg"></Swiperdiv>
</template>

<script>
import Swiperdiv from './swiper/swiper'
export default {
  name: 'index',
  data () {
    return {
    	listImg:[
    		{url:'http://bookclub-app.oss-cn-beijing.aliyuncs.com/banner/2017/wshzbhf.png',articleUrl:'https://mp.weixin.qq.com/s?__biz=MzA4OTg1ODc1OA==&mid=2718212456&idx=1&sn=1de257016277cb8d70568037d6eb3ad3&chksm=b7e476c18093ffd7deca99a585489ea2fe62c3517fd903158952535f5a9ac032d4c6af1143fa&mpshare=1&scene=1&srcid=0103bLSucesrdjexWzloItT0#rd'},
    		{url:'http://bookclub-app.oss-cn-beijing.aliyuncs.com/banner/2017/883097605642471434.png',articleUrl:'http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/'}
    	]
    }
  },
  components: {
    Swiperdiv
  }
}
</script>

<style scoped>
</style>
