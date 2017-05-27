<template>
  <div class="navbar">
    <router-link to="/">
      <div>
        <i class="iconfont icon-home"></i>
        <p>首页</p>
      </div>
    </router-link>
    <router-link to="/wei">
      <div>
        <i class="iconfont icon-live"></i>
        <p>维</p>
      </div>
    </router-link>
    <router-link to="/about">
      <div>
        <i class="iconfont icon-book"></i>
        <p>书</p>
      </div>
    </router-link>
    <router-link to="/vip">
      <div>
        <i class="iconfont icon-people"></i>
        <p>会</p>
      </div>
    </router-link>
    <router-link to="/partner">
      <div>
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
  }
}
</script>

<style scoped>
.navbar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    width:100%;
    height: 50px;
    display: -webkit-flex;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    border-top: 1px solid #bfbec2;
    background: #fff;
  }
.navbar a{
  display: -webkit-inline-flex; /* Safari */
  display: inline-flex;
  flex-direction:column;
  width: 20%;
  height: 40px;
  color: #7f8389;
  text-align: center;
}
.navbar a i{
  font-size: 20px;
}
.navbar .router-link-exact-active p{
  color: #56be56;
  font-size: 14px;
  -webkit-transition:all .5s;
  font-weight: 800;
}
.navbar .router-link-exact-active{
  -webkit-animation:deg 2s;
}
.navbar .router-link-exact-active i{
  color: #56be56;
  font-size: 20px;
}
@-webkit-keyframes deg{
  0%{ transform:rotate(30deg); }
  50%{ transform:rotate(-30deg); }
  100%{ transform:rotate(0deg); }
}
</style>
