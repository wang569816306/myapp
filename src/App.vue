<template>
  <div id="app">
    <router-view></router-view>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar'
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>
body, button, select, textarea, input, label, option, fieldset, legend{font-family: 微软雅黑E\8F6F\96C5\9ED1,Tahoma,Verdana;font-size: 12px;line-height: 18px;color: #444;}
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, legend, input, textarea, button, p, blockquote, th, td{margin: 0;padding: 0;}
textarea{resize: none}
.clear{height:1px;overflow:hidden;clear:both;}
a,img{border:0;}
a{color: #666;text-decoration: none;}
li{list-style-type:none;}
.fl{float:left;}
.fr{float:right;}
#app {
    position: relative;
    width: 100%;
    max-width: 750px;
    min-width: 320px;
    margin: 0 auto;
    width: 7.5rem;
    background: #fff;
}
</style>
