import About from "../pages/about.vue";
import Home from "../pages/home.vue";
import News from "../pages/news.vue";
import Message from "../pages/message.vue";
import MessageDetail from "../pages/messageDetail.vue";
import User from "../pages/user.vue";
import UserDetail from "../pages/userDetail.vue";

export default [
  { path: "/about", component: About },
  {
    path: "/home",
    component: Home,
    children: [
      { path: "news", component: News },
      {
        path: "message",
        component: Message,
        children: [
          {
            path: "message_detail/:id",
            component: MessageDetail,
            props: true
          }
        ]
      }
    ]
  },
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
  },
  { path: "/", redirect: "/about" }
];
