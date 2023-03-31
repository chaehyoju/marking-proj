<template>
  <div class="flex justify-center space-x-4 text-gray-400">
    <template v-if="prevPage">
      <button class="hover:text-gray-800 transition" @click="clickPage(1)">
        처음
      </button>
      <button
        class="hover:text-gray-800 transition"
        @click="clickPage(prevPage)"
      >
        이전
      </button>
    </template>
    <template v-for="i in limit">
      <button
        v-if="start + i <= total"
        class="hover:text-gray-800 transition"
        :class="{ 'text-gray-800 font-bold': current === start + i }"
        @click="clickPage(start + i)"
      >
        {{ start + i }}
      </button>
    </template>
    <template v-if="nextPage - 1 < total">
      <button
        class="hover:text-gray-800 transition"
        @click="clickPage(nextPage)"
      >
        다음
      </button>
      <button class="hover:text-gray-800 transition" @click="clickPage(total)">
        끝
      </button>
    </template>
  </div>
</template>

<script setup>
import { computed } from "vue";
const emit = defineEmits(["loadPage"]);
const props = defineProps({
  current: Number,
  total: Number,
  limit: Number,
});

const start = computed(() =>
  props.current < props.limit
    ? Math.floor(props.current / props.limit) * props.limit
    : Math.floor((props.current - 1) / props.limit) * props.limit
);
const prevPage = computed(() => start.value);
const nextPage = computed(() => start.value + props.limit + 1);

const clickPage = (page) => {
  emit("loadPage", page);
};
</script>
