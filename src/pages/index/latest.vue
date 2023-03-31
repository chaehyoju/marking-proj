<template>
  <h2 class="text-2xl font-bold">새로 발행되는 음원</h2>
  <div class="mt-2 flex justify-between">
    <div class="category-select flex space-x-2">
      <button
        :class="{ active: state.category === 'help' }"
        @click="setCategory('help')"
      >
        수면도움
      </button>
      <button
        :class="{ active: state.category === 'care' }"
        @click="setCategory('care')"
      >
        이명케어
      </button>
      <button
        :class="{ active: state.category === 'change' }"
        @click="setCategory('change')"
      >
        기분전환
      </button>
      <button
        :class="{ active: state.category === 'breath' }"
        @click="setCategory('breath')"
      >
        심호흡
      </button>
    </div>
    <div class="sort-select flex space-x-6">
      <button
        :class="{ active: state.sort === 'recommend' }"
        @click="setSort('recommend')"
      >
        추천순
      </button>
      <button
        :class="{ active: state.sort === 'popular' }"
        @click="setSort('popular')"
      >
        인기순
      </button>
    </div>
  </div>
  <div class="mt-9 grid grid-cols-3 gap-6">
    <div v-for="item in state.list" :key="item.id" class="flex space-x-3">
      <router-link :to="'/playlist/' + item.id" class="flex-none"><img :src="item.image" class="w-32 h-32 rounded-lg" /></router-link>
      <div class="relative flex-grow py-1">
        <!-- CSS line-clamp-n 클래스는 (line-clamp 플러그인 설치 필요) 긴 텍스트를 n줄까지만 텍스트를 보여줍니다. -->
        <router-link :to="'/playlist/' + item.id" class="font-medium line-clamp-3 hover:text-amber-600 transition">{{ item.title }}</router-link>
        <!-- 여기서는 위쪽에 제목, 아래쪽에 코멘트, 라이크 수 나타나는 걸 display: relative와 absolute를 이용해서 구현했는데,
        flex와 flex-direction을 이용해서 구현할 수도 있습니다. 일부러 두 가지 방법으로 다 구현했는데 아무래도 좀 더 현대적인 방법은
        flex라고 봅니다. flex를 이용한 구현 예제는 top10.vue를 보시면 됩니다 -->
        <h5
          class="absolute w-full bottom-1 left-0 flex items-center text-gray-500"
        >
          <span class="text-sm">{{ item.comments }}</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-1 h-4 w-4 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <span class="ml-2 text-sm">{{ item.likes }}</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-1 h-4 w-4 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </h5>
      </div>
    </div>
  </div>
  <div class="mt-6">
  <pagination v-if="state.page" :current="state.page.current" :total="state.page.total" :limit="5" @loadPage="getLatest"></pagination>
  </div>
</template>

<style lang="postcss" scoped>
.category-select > button {
  /* min-width와 가로 padding을 모두 걸어준 것은 button 안에 4글자를 초과하는 긴 글자가 들어가도 모양이 깨지지 않게 하려고 */
  @apply border rounded-md text-sm min-w-[64px] px-1.5 py-0.5 font-medium transition hover:text-amber-600 hover:border-amber-300 hover:bg-amber-50;
}
.category-select > button.active {
  @apply text-amber-600 border-amber-300 bg-amber-50;
}
.sort-select > button {
  @apply font-medium hover:text-amber-600 transition;
}
.sort-select > button.active {
  @apply text-amber-600;
}
</style>

<script setup>
// ref, reactive 어느 것을 사용해도 상관은 없겠습니다만, reactive가 Vue 3에서는 조금 더 오버헤드가 적은 방식입니다.
import { reactive, onMounted } from "vue";
// axios를 쓰지 않고 async-await, fetch API만 사용해도 무방합니다. 취향 차이인 것 같습니다.
import axios from "axios";


const state = reactive({
  category: "help",
  sort: "recommend",
  page: null,
  list: [],
});

const setCategory = (c) => {
  if (state.category === c) return;
  state.category = c;
  getLatest();
};

const setSort = (s) => {
  if (state.sort === s) return;
  state.sort = s;
  getLatest();
};

const getLatest = (page) => {
  axios(apiURL + "/v1/latest", {
    method: "GET",
    params: { category: state.category, sort: state.sort, page: page || "1" },
  })
    .then((data) => {
      state.list = [];
      data.data.result.list.forEach((e) => {
        state.list.push(e);
      });
      state.page = data.data.result.page;
    })
    .catch((error) => console.error(error));
};

onMounted(() => {
  getLatest();
});
</script>
