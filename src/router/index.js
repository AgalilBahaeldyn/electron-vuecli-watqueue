import { createRouter, createWebHashHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Servicequeue from "../views/ServiceQueue.vue";


const routes = [

  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/queue',
    name: 'ServiceQueue',
    component: Servicequeue
  }

];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
