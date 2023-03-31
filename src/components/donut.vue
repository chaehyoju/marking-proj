<template>
  <div class="donut" :style="donutCSS">
    <div class="hole">{{ age }}세</div>
  </div>
  <div class="mt-8">
    <ul class="space-y-1">
      <li
        class="flex space-x-4 items-center"
        v-for="(item, index) in props.list?.slice(0, 4).sort((a, b) => {
          return b.value - a.value;
        })"
        :key="item.type"
      >
        <div
          class="w-4 h-4 rounded"
          :style="`background: ${colors[index]} `"
        ></div>
        <h5 class="flex-grow">{{ item.type }}</h5>
        <h5 class="font-bold">{{ item.value }}%</h5>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
.donut {
  width: 100%;
  border-radius: 50%;
  @apply flex items-center justify-center aspect-square;
}

.hole {
  width: 75%;
  height: 75%;
  border-radius: 50%;
  @apply flex items-center justify-center bg-white text-gray-700 font-bold text-4xl;
}
</style>

<script setup>
import { watchEffect } from "vue";

const props = defineProps({
  list: Array,
  age: String,
});

const colors = ["#6b7280", "#eab308", "#fcd34d", "#fef3c7"];
let startDeg = 0;
let donutCSS = "background: conic-gradient(";

// props에서 입력되는 값에 따라서(watchEffect 사용) 도넛 모양에 필요한 CSS를 작성합니다(donutCSS).
watchEffect(() => {
  props.list
    ?.slice(0, 4) // 최대 4개까지만 지원한다고 가정해서 slice 0,4 적용. 만일 더 늘릴려면 slice 수와 colors에 정의된 색상 수를 늘려 주세요.
    .sort((a, b) => {
      return b.value - a.value;
    })
    .forEach((item, index) => {
      donutCSS += `${colors[index]} ${startDeg}deg ${
        startDeg + (Number(item.value) / 100) * 360
      }deg`;
      if (index + 1 !== props.list?.slice(0, 4).length) {
        donutCSS += ",";
      } else {
        donutCSS += ");";
      }
      startDeg += (Number(item.value) / 100) * 360;
    });
});
</script>
