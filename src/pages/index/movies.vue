<template>
  <div class="text-center">
    <h3 class="text-2xl font-bold">동영상 추천</h3>
    <h5 class="">새롭게 등록된 동영상</h5>
  </div>
  <div class="mt-8 contents-grid grid grid-cols-5 gap-6">
  <template v-for="item in state.list" :key="item.id">
  <router-link :to="'/playlist/' + item.id">
    <div
      class="relative aspect-square w-full bg-red-500 text-sm rounded-lg overflow-hidden"
    >
      <img :src="item.image" />
      <!-- 가로 길이가 변하더라도 정사각형이 될 수 있도록 w-full, aspect-square를 적용합니다. 
		border-radius 적용시 하위 엘리먼트에서 정사각형 그림자를 쓰고 있으므로 튀어나오지 않도록 overflow-hidden도 적용합니다. -->
      <!-- 그라데이션으로 아래쪽으로 갈수록 검게 되는 반투명 div를 올립니다. 앨범 자켓 사진 위에 오버레이를 위해서 넣었습니다. -->
      <div
        class="top-0 left-0 absolute bg-gradient-to-b from-transparent to-black/30 aspect-square w-full h-full"
      ></div>
      <div
        class="absolute flex items-center space-x-0.5 right-2 top-2 bg-pink-500 text-white text-xs font-medium px-1.5 py-0.5 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          /></svg
        ><span>{{ item.users }}</span>
      </div>
      <div class="absolute bottom-2 left-2 text-white">
        <h5 class="truncate w-32">{{ item.title }}</h5>
        <h5 class="truncate w-32">{{ item.author }}</h5>
      </div>
    </div>
  </router-link>
  </template>
  </div>
</template>

<style lang="postcss" scoped></style>

<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

const state = reactive({
  list: [],
});

const getMovies = () => {
  axios(apiURL + "/v1/movies", {
    method: "GET",
  })
    .then((data) => {
      state.list = data.data.result;
    })
    .catch((error) => console.error(error));
};

onMounted(() => {
  getMovies();
});
</script>
