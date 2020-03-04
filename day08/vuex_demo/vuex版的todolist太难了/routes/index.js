import Todo from "../pages/todo.vue";
import TodoDetail from "../pages/todoDetail.vue";
export default [
  {
    path: "/todo",
    component: Todo,
    children: [
      {
        path: ":id",
        component: TodoDetail,
        props: route => ({ id: route.params.id, name: route.query.name })
      }
    ]
  },
  { path: "/", component: Todo }
];
