import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入按需加载的element
import element from './element';
import 'element-ui/lib/theme-chalk/index.css';
const locale = require('element-ui/lib/locale/lang/zh-CN');
Vue.use(element, { locale: locale.default, size: 'mini' })
// 引入scss
import "@/styles/index.scss";

// 引入 lodash
import _ from "lodash";

// 引入全局组件
import { myCol } from '@/components';
Vue.component('myCol', myCol)

Vue.config.productionTip = false
Vue.prototype.log = (v1: any, v2?: any) => {
  if (v2) {
    console.log(_.cloneDeep(v1), _.cloneDeep(v2));
  } else {
    console.log(_.cloneDeep(v1));
  }
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
