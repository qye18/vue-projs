import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router';
import router from '@/router';
import store from '@/store'
import { Button, Container, Header, Aside, Main, Menu, MenuItem, Submenu, MenuItemGroup,
Col, Row, Breadcrumb, BreadcrumbItem, Dropdown, DropdownItem, DropdownMenu } from 'element-ui';

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
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.config.productionTip = false
Vue.use(VueRouter);
const vc = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

// console.log(vc.$store);
