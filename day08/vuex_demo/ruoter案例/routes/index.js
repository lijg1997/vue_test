import About from "pages/about";
import Home from "pages/home";
import News from "pages/news";
import Message from "pages/message";
import MessageDetail from "pages/messageDetail";
import User from "pages/user";
import UserDetail from "pages/userDetail";
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
        children: [{ path: ":id", component: MessageDetail, props: true }]
      },
      { path: "", redirect: "news" }
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
