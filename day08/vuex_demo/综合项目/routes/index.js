import User from "../pages/uesr.vue";
import UserDetail from "../pages/userDetail.vue";
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
