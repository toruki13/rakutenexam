import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CardList from '../views/CardList.vue';

const routes = [
  {
    path: '/CardList',
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
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
