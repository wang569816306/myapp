<template>
  <div class="navbar">
    <router-link to="/">
      <div @click="activeBar(0);">
        <i><img class="icon_home" src="./img/home.png"></i>
        <p>首页</p>
      </div>
    </router-link>
    <router-link to="/wei">
      <div @click="activeBar(1);">
        <i><img class="icon_home" src="./img/wei.png"></i>
        <p>维</p>
      </div>
    </router-link>
    <router-link to="/about">
      <div @click="activeBar(2);">
        <i><img class="icon_home" src="./img/book.png"></i>
        <p>书</p>
      </div>
    </router-link>
    <router-link to="/vip">
      <div @click="activeBar(3);">
        <i><img class="icon_home" src="./img/vip.png"></i>
        <p>会</p>
      </div>
    </router-link>
    <router-link to="/partner">
      <div @click="activeBar(4);">
        <i><img class="icon_home" src="./img/partner.png"></i>
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
}
.navbar a i{
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  margin: auto;
}
.navbar a i img{
  display: block;
  width: 100%;
}
.navbar a p{
  text-align: center;
  font-size: 0.24rem;
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
@-webkit-keyframes deg{
  0%{ transform:rotate(30deg); }
  50%{ transform:rotate(-30deg); }
  100%{ transform:rotate(0deg); }
}
</style>
