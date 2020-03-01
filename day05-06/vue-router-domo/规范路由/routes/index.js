import About from "../pages/about.vue";
import AboutA from "../pages/about-a.vue";
import Home from "../pages/home.vue";
import HomeA from "../pages/home-a.vue";
export default [
  { path: "/about", component: About },
  { path: "/about/about_a", component: AboutA },
  { path: "/home", component: Home },
  { path: "/home/home_a", component: HomeA },
  { path: "/", redirect: "/about/about_a" }
];
