import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Finding Vue 3 and Vuex 4",
    },
  },
  {
    path: "/:userId",
    name: "user",
    component: User,
    meta: {
      title: "User Details",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
