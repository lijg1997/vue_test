# vue 路由

## 基本配置

1. 引入 Vue，引入 VueRouter， 引入路由组件

```javascript
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import About from "@/pages/about.vue";
import Home from "@/pages/home.vue";
import Message from "@/pages/message.vue";
```

2. 使用 VueRouter

```javascript
Vue.use(VueRouter);
```

3. 创建路由

```javascript
const routes = [
  { path: "/about", component: About },
  {
    path: "/home",
    component: Home,
    children: [
      //嵌套子路由都要写在children中，并且path不能带 /
      //如果子路由中还有子路由，也要写在自己的children中
      { path: "message", component: Message }
    ]
  }
];
```

4. 设置路由器

```javascript
const router = new VueRouter ({
  routes, //配置路由
  mode: 'hash' || 'history' //路由模式二选一，hash方式的改变，后端是检测不到的
  linkActiveClass: 'active' //模糊匹配，建议使用，注意点：配置的路由路径要规范，不然会造成不便的影响
  linkExactActiveClass: 'active' //精准匹配
})
```

5. 在 vue 实例当中配置路由器

```javascript
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
```

## 工程化开发配置路由

1. 文件的放置
   - 路由组件一般要放在 pages 文件夹下
   - 创建 routes 文件夹，创建 index.js 文件，配置路由相关的配置
   - 创建 router 文件夹，创建 index.js 文件， 配置路由器相关配置
2. routes 的配置

```javascript
import About from "@/pages/about.vue";
import Home from "@pages/home.vue";
import Message from "@pages/Message.vue";
export default [
  //将配置好的路由导出
  { path: "/about", component: About },
  {
    path: "/home",
    component: Home,
    children: [
      //嵌套子路由都要写在children中，并且path不能带 /
      //如果子路由中还有子路由，也要写在自己的children中
      { path: "message", component: Message }
    ]
  }
];
```

3. router 的配置

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/routes'; //引入配置好的路由
Vue.use(VueRouter);
export default new VueRouter({ //将配置好的路由器导出
  routes, //配置路由
  mode: 'hash' || 'history' //路由模式二选一，hash方式的改变，后端是检测不到的
  linkActiveClass: 'active' //模糊匹配，建议使用，注意点：配置的路由路径要规范，不然会造成不便的影响
  linkExactActiveClass: 'active' //精准匹配
})
```

4. 在 main.js 文件中配置路由器，在工程化的开发中，主文件还是非常干净的

```javascript
import Vue from "vue";
import App from "./App.vue";
import router from "@/router"; //引入配置好的路由器
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
```
