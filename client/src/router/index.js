import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CardList from '../views/CardList.vue';

const routes = [
  {
    path: '/',
    name: 'CardList',
    component: CardList,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/facts',
    name: 'API',
    component: () =>
      
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
