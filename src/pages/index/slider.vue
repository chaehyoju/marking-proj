<template>
     <div class="leading-normal text-3xl text-center font-bold text-gray-600 mt-68 mb-9">
        최근 담화, 함께 볼까요?
     </div>
    <div class="content-center border w-96 rounded-xl m-auto h-36">
        <swiper :modules="modules" :centeredSlides="true" :slides-per-view="auto" :loop="true" :autoplay="{delay: 5000,}" class="relative">
            <swiper-slide><div class="text-center"><span>안녕</span></div></swiper-slide>
            <swiper-slide><div class="text-center"><span>하이</span></div></swiper-slide>
            <swiper-slide><div class="text-center"><span>롤린</span></div></swiper-slide>
        </swiper>
    </div>
    <div class="m-auto w-40 mt-11">
        <img src="@/assets/chat.png" style="width: 130px;">
    </div>
    
</template>

<script setup>
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const modules = [Navigation, Autoplay];
</script>