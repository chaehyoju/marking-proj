<template>
  <div class="text-center">
    <h3 class="text-2xl font-bold">콘텐츠 추천</h3>
    <h5 class="">새롭게 등록된 콘텐츠</h5>
  </div>
  <div class="mt-8 contents-grid grid grid-cols-5 gap-6 text-white">
  <!-- grid 이므로 그냥 계속 추가해주면 알아서 1줄 5개로 맞춰집니다 -->
    <div class="bg-pink-500">신나는</div>
    <div class="bg-blue-500">잔잔한</div>
    <div class="bg-yellow-500">위로하는</div>
    <div class="bg-emerald-500">감성적인</div>
	<div class="bg-sky-500">테스트입니다</div>
	<div class="bg-sky-500">어쩌구 때</div>
    <div class="bg-red-500">슬플 때</div>
    <div class="bg-green-500">어쩌구하는</div>
    <div class="bg-cyan-500">여기저기</div>
    <div class="bg-emerald-500">감성적인</div>
    <div class="bg-red-500">슬플 때</div>
    <div class="bg-green-500">어쩌구하는</div>
    <div class="bg-cyan-500">여기저기</div>
    <div class="bg-emerald-500">감성적인</div>
    <div class="bg-red-500">슬플 때</div>
    <div class="bg-green-500">어쩌구하는</div>
    <div class="bg-cyan-500">여기저기</div>
  </div>
</template>

<style lang="postcss" scoped>
.contents-grid > div {
  @apply rounded-lg text-white p-4 text-base h-24;
}
</style>
