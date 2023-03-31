<template>
  <h2 class="text-2xl font-bold">TOP 10</h2>
  <h5>실시간</h5>
  <div class="mt-6 grid grid-cols-2 gap-x-8">
    <div class="space-y-8">
      <div
        class="flex space-x-4"
        v-for="(item, index) in state.list.slice(0, 5)"
      >
        <div
          class="w-4 text-2xl font-bold flex items-center"
          :class="index < 3 ? 'text-amber-500' : 'text-gray-400'"
        >
          {{ index + 1 }}
        </div>
        <router-link :to="'/playlist/' + item.id" class="flex-none"
          ><img :src="item.image" class="w-36 h-24 rounded-lg"
        /></router-link>
        <!-- 여기서는 위에 제목, 아래에 이름 나타나는 걸 flex와 flex-direction: column으로 구현했습니다. 
        위쪽에 flex-grow를 걸어주면 자연스럽게 이름이 나타날 마지막 줄만 빼고 나머지는 모두 제목이 차지하게 되므로
        display: relative, absolute를 사용하는 것보다 더 깔끔한 느낌이 있습니다. -->
        <div class="flex flex-col">
          <router-link
            :to="'/playlist/' + item.id"
            class="flex-grow text-lg font-medium transition hover:text-amber-600"
            >{{ item.title }}</router-link
          ><span class="text-gray-400">{{ item.author }}</span>
        </div>
      </div>
    </div>
    <div class="space-y-8">
      <div
        class="flex space-x-4"
        v-for="(item, index) in state.list.slice(5, 10)"
      >
        <div class="w-5 text-2xl font-bold flex items-center text-gray-400">
          {{ index + 6 }}
        </div>
        <router-link :to="'/playlist/' + item.id" class="flex-none"
          ><img :src="item.image" class="w-36 h-24 rounded-lg"
        /></router-link>
        <div class="flex flex-col">
          <router-link
            :to="'/playlist/' + item.id"
            class="flex-grow text-lg font-medium transition hover:text-amber-600"
            >{{ item.title }}</router-link
          ><span class="text-gray-400">{{ item.author }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

const state = reactive({
  list: [],
});

const getTop10 = () => {
  axios(apiURL + "/v1/top10", {
    method: "GET",
  })
    .then((data) => {
      state.list = data.data.result;
    })
    .catch((error) => console.error(error));
};

onMounted(() => {
  getTop10();
});
</script>
