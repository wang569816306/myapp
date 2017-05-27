<template>
  <div class="navbar">
    <router-link to="/">
      <div @click="activeBar(0);">
        <i class="iconfont icon-home"></i>
        <p>首页</p>
      </div>
    </router-link>
    <router-link to="/wei">
      <div @click="activeBar(1);">
        <i class="iconfont icon-live"></i>
        <p>维</p>
      </div>
    </router-link>
    <router-link to="/about">
      <div @click="activeBar(2);">
        <i class="iconfont icon-book"></i>
        <p>书</p>
      </div>
    </router-link>
    <router-link to="/vip">
      <div @click="activeBar(3);">
        <i class="iconfont icon-people"></i>
        <p>会</p>
      </div>
    </router-link>
    <router-link to="/partner">
      <div @click="activeBar(4);">
        <i class="iconfont icon-people1"></i>
        <p>合伙人</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  methods: {
    activeBar: function (num) {
    }
  }

}
</script>

<style scoped>
.navbar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width:100%;
    height: 1rem;
    display: -webkit-flex;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    border-top: 1px solid #bfbec2;
  }
.navbar a{
  display: -webkit-inline-flex; /* Safari */
  display: inline-flex;
  flex-direction:column;
  width: 33%;
  height: 0.8rem;
  color: #7f8389;
  text-align: center;
}
.navbar a i{
  font-size: 0.4rem;
}
.navbar .router-link-exact-active p{
  color: #56be56;
  font-size: 0.26rem;
  -webkit-transition:all .5s;
  font-weight: 800;
}
.navbar .router-link-exact-active{
  -webkit-animation:deg 2s;
}
.navbar .router-link-exact-active i{
  color: #56be56;
  font-size: 0.4rem;
}
@-webkit-keyframes deg{
  0%{ transform:rotate(30deg); }
  50%{ transform:rotate(-30deg); }
  100%{ transform:rotate(0deg); }
}
</style>
