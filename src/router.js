import { createWebHistory, createRouter } from "vue-router";
// 자주 호출되는 페이지가 아니라면 lazy loading으로 바꿔주는 것이 초기 로딩 데이터 양을 줄이는 데 효과가 있을 것입니다.
import IndexLayout from "@/layouts/index.vue";
import Index from "@/pages/index.vue";


const routes = [
  {
    path: "/",
    component: IndexLayout,
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
