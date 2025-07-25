import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import Member from "@/components/Member.vue";
import MemberSignup  from "@/components/MemberSignup.vue";
const routes = [
 { path : "/members", component: Member},
 { path : "/member/signup", component: MemberSignup },
  { path : "/", component: HomePage},];

  const router = createRouter({
    history : createWebHistory(),routes
  })

  export default router;