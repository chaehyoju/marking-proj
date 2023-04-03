<template>
  <header class="border-b border-gray-200">
    <div class="container py-4 flex items-center space-x-8">
      <div>
        <router-link to="/" class="text-xl hover:text-gray-400 transition"
          >술담화</router-link
        >
      </div>
      <div class="relative">
        <input
          type="text"
          class="block text-sm font-medium w-full rounded-md border bg-gray-100 border-gray-100 focus:border-gray-200 focus:ring-0"
          placeholder="검색어를 입력하세요"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute right-2 top-2 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <nav class="flex-grow flex space-x-8">
        <a href="#">구독</a>
        <a href="#">스토어</a>
      </nav>
      <nav>
          <router-link to="/signup">회원가입</router-link>/<a href="#">로그인</a>
      </nav>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
nav > a {
  @apply hover:text-gray-500 transition text-sm font-bold;
}
</style>

<script setup>

</script>
