<template>
    <section class="container max-w=[360px] py-32">
        <h1 class="text-3xl font-bold text-center">회원가입</h1>
        <div class="content-center">
            <h2>{{ state.name }} 환영해요!</h2>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">이메일<span class="text-red-500">*</span></label>
            <input type="email" id="email" class="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"><br>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password1">비밀번호<span class="text-red-500">*</span></label>
            <input type="password" id="password1" class="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"><br>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password2">비밀번호 확인<span class="text-red-500">*</span></label>
            <input type="password" id="password2" class="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"><br>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">닉네임(선택)</label>
            <input type="text" id="name" class="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"><br>
            <div>
                <button @click="toggle()" class="block text-gray-700 text-sm font-bold mb-2">추천인</button>
                <input v-if="state.isTrue == true" type="text" class="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <br>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">회원가입</button>
        </div>
    </section>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
    name: "채효주",
    isTrue: false,
})

const toggle = () => {
    if(state.isTrue == false){
        state.isTrue = true;
    } else if(state.isTrue == true){
        state.isTrue = false;
    }
}
</script>