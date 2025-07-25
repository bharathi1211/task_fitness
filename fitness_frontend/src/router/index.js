import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import MemberLogin from "@/components/MemberLogin.vue";
import MemberSignup from "@/components/MemberSignup.vue";
import MemberDashboard from "@/components/MemberDashboard.vue";
import authMiddleware from "@/middleware/auth";
const routes = [
  { path : "/member/login", component: MemberLogin},
  {path:"/member/signup",component:MemberSignup},
  {path:"/member/dashboard",component:MemberDashboard, meta:{requireAuth: true}},
  { path : "/", component: HomePage},];

  const router = createRouter({
    history : createWebHistory(),routes
  })
  router.beforeEach(authMiddleware);
  export default router;