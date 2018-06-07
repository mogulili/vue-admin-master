// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import jsPlumb from 'jsplumb'
import './assets/js/jsplumb.js'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css'
// import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false;
Vue.use(ElementUI,jsPlumb);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  render:h => h(App),
  template: '<App/>'
})
