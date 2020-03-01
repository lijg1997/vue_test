import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
Vue.config.productionTip = false;

Vue.use(VueRouter);
import About from "./components/about.vue";
import Home from "./components/home.vue";
const routes = [
  { path: "/about", component: About },
  { path: "/home", component: Home }
];
const router = new VueRouter({
  routes
});
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
