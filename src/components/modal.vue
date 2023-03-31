<template>
  <transition name="fade">
    <div
      v-if="show"
      class="flex fixed z-10 overflow-y-auto inset-0 min-h-screen px-4"
      role="dialog"
    >
      <div
        class="fixed inset-0 bg-gray-700 bg-opacity-70 cursor-pointer"
        @click="closeModal()"
      ></div>
      <div
        class="bg-gray-50 rounded-lg overflow-hidden shadow m-auto max-w-screen-sm transform -translate-y-9 lg:translate-y-0"
      >
        <div class="min-w-[300px] p-4">
		<div class="text-lg text-center font-medium">{{ title }}</div>
          <div class="mt-2">{{ message }}</div>
          <div class="mt-4">
            <!-- 버튼을 다르게 하는 것뿐만 아니라, 아예 다르게 구성할 수도 있을 것이라서 template v-if로 처리했습니다.  
		  그냥 단순히 버튼의 색상만 바꿀 거라면 button에서 :class="isError ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'"
		  같은 식으로 처리해도 됩니다. -->
            <template v-if="!isError">
              <button
                class="w-full py-2.5 text-center block rounded-md text-white bg-blue-500 hover:bg-blue-600 transition"
                ref="closeButton"
                @click="closeModal()"
              >
                확인
              </button>
            </template>
            <template v-else>
              <button
                class="w-full py-2.5 text-center block rounded-md text-white bg-red-500 hover:bg-red-600 transition"
                ref="closeButton"
                @click="closeModal()"
              >
                확인
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onUpdated } from "vue";

const closeButton = ref();

const props = defineProps({
  show: Boolean,
  title: String,
  message: String,
  isError: Boolean,
});

const emit = defineEmits(["closer"]);
const closeModal = () => {
  emit("closer");
};

onUpdated(() => {
  if (props.show) {
    closeButton.value.focus();
  }
});
</script>

<style lang="postcss" scoped>
/* modal component 안이라서 scoped로 선언해주기는 했는데 사실 전역으로 해도 무방합니다 */
.fade-enter-active,
.fade-leave-active {
  @apply transition ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
