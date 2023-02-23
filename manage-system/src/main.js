import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router';
import { Button, Container, Header, Aside, Main, Menu, MenuItem, Submenu, MenuItemGroup,
Col, Row } from 'element-ui';

Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);

Vue.config.productionTip = false
Vue.use(VueRouter);
const vc = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// console.log(vc);
