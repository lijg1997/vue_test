import About from "../pages/about.vue";
import Home from "../pages/home";
export default [
  { path: "/about", component: About },
  { path: "/home", component: Home },
  { path: "/", redirect: "/about" }
];
