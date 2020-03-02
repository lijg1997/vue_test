import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import About from "./pages/about.vue";
import Home from "./pages/home.vue";
import User from "./pages/user.vue";
import UserDetail from "./pages/user_detail.vue";
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/about", component: About },
  { path: "/home", component: Home },
  {
    path: "/user",
    component: User,
    children: [
      {
        path: ":id",
        component: UserDetail,
        props: route => ({ id: route.params.id, name: route.query.name })
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: "hash",
  linkActiveClass: "active"
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
