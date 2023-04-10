import { createWebHistory, createRouter } from "vue-router";
//index
import IndexLayout from "@/layouts/index.vue";
import Index from "@/pages/index.vue";

//회원
import SignUp from "@/pages/signup.vue";
import Login from "@/pages/login.vue";


const routes = [
  {
    path: "/",
    component: IndexLayout,
    children: [
      { path: "", component: Index },
      { path: "signup", component: SignUp},
      { path: "login", component: Login},
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 자연스러운 스크롤 처리를 위해서 scrollBehavior를 정의해 줍니다. 뒤로 가기, URL 뒤에 #해시 접속에 모두 대응해 줍니다.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: "smooth",
        };
      } else {
        return { left: 0, top: 0 };
      }
    }
  },
});

export default router;
