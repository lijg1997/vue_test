import GetAxios from "../pages/GetAxios.vue";
import PostAxios from "../pages/PostAxios.vue";
import PatchAxios from "../pages/PatchAxios.vue";
import PutAxios from "../pages/PutAxios.vue";
import DeleteAxios from "../pages/DeleteAxios.vue";

export default [
  { path: "/get_axios", component: GetAxios },
  { path: "/post_axios", component: PostAxios },
  { path: "/patch_axios", component: PatchAxios },
  { path: "/put_axios", component: PutAxios },
  { path: "/delete_axios", component: DeleteAxios }
];
