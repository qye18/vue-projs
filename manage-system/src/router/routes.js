import MainContent from '../views/MainContent.vue'
import Home from '../views/Home.vue'
import Goods from '../views/Goods.vue'
import User from '../views/User.vue'
import SubPage1 from '../views/SubPage1.vue'
import SubPage2 from '../views/SubPage2.vue'

export default [
  {
    name: 'MainContent',
    path: '/',
    component: MainContent,
    redirect:{name:'home'},
    children: [
      {
        name: 'home',
        path: '/home',
        component: Home,
      },
      {
        name: 'goods',
        path: '/goods',
        component: Goods,
      },
      {
        name: 'user',
        path: '/user',
        component: User,
      },
      {
        name: 'subPage1',
        path: '/subPage1',
        component: SubPage1,
      },
      {
        name: 'subPage2',
        path: '/subPage2',
        component: SubPage2,
      }
    ]
  }
]