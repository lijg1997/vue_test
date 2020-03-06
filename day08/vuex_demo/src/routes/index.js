import User from "pages/user";
import UserDetail from "pages/userDetail";
export default [
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
  { path: "/", redirect: "/user" }
];
