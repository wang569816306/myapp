// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


/*全局常量*/
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='                    // 线上代理地址
global.LOCAL_API_PROXY = 'http://192.168.31.172/proxy.php?apiProxy='

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
