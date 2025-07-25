import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";

const routes = [
//   { path : "/members", component:  },
//   { path : "/admin", component: adminLogin },
  { path : "/", component: HomePage},];

  const router = createRouter({
    history : createWebHistory(),routes
  })

  export default router;