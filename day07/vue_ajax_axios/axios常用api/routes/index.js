import Hello from "../pages/hello.vue";
import GetAxios from "../pages/get_axios.vue";
import PostAxios from "../pages/post_axios.vue";
import PatchAxios from "../pages/patch_axios.vue";
import DeleteAxios from "../pages/delete_axios.vue";
import PutAxios from "../pages/put_axios.vue";
export default [
  { path: "/", component: Hello },
  { path: "/get_axios", component: GetAxios },
  { path: "/post_axios", component: PostAxios },
  { path: "/patch_axios", component: PatchAxios },
  { path: "/delete_axios", component: DeleteAxios },
  { path: "/put_axios", component: PutAxios }
];
