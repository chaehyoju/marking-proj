<template>
  <swiper
    :modules="modules"
    :centeredSlides="true"
    :slides-per-view="3"
    :space-between="0"
    :loop="true"
    navigation
    :pagination="{
      type: 'fraction',
    }"
    class="relative"
  >
    <swiper-slide
      ><div class="bg-red-500 text-white h-72"><img class="select-none" src="@/assets/banner2.jpg" /></div></swiper-slide
    >
    <swiper-slide
      ><div class="bg-emerald-500 text-white h-72"><img class="select-none" src="@/assets/banner3.jpg" /></div></swiper-slide
    >
    <swiper-slide
      ><div class="bg-blue-500 text-white h-72"><img class="select-none" src="@/assets/banner4.jpg" /></div></swiper-slide
    >
    <div
      class="
        absolute
        -left-20
        top-0
        h-full
        w-[580px]
        bg-gradient-to-r
        from-gray-400
        via-gray-400
        to-transparent
        z-10
      "
    ></div>
    <div
      class="
        absolute
        -right-20
        top-0
        h-full
        w-[580px]
        bg-gradient-to-l
        from-gray-400
        via-gray-400
        to-transparent
        z-10
      "
    ></div>
  </swiper>
</template>

<style lang="postcss">
/* swiper 라이브러리가 기본값으로 쓰는 클래스들에 그냥 덮어쓰기를 해서 처리해 보았습니다.
덮어쓰기를 안할 거면 커스텀 클래스를 따로 등록하고 처리해도 무방합니다. */
.swiper-button-prev,
.swiper-button-next {
  @apply bg-gray-900 bg-opacity-50 p-6 text-white rounded-full z-20 hover:bg-opacity-60 transition;
}
.swiper-button-prev {
  @apply left-[400px];
}
.swiper-button-next {
  @apply right-[400px];
}
.swiper-button-prev::after,
.swiper-button-next::after {
  @apply text-lg text-white;
}
.swiper-pagination {
  @apply left-[915px] bottom-4 w-16 rounded-full z-20 px-1 py-0.5 bg-gray-700 text-gray-400;
}
.swiper-pagination-current, .swiper-pagination-total {
  @apply text-white;
}
</style>

<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const modules = [Navigation, Pagination];
</script>