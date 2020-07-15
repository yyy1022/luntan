import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import   "../src/styles/base.css"
Vue.config.productionTip = false
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(VueAxios, axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
