<template>
    <section class="container max-w=[360px] py-32">
        <div class="w-40 m-auto">
            <h1 class="text-3xl font-bold text-left">반가워요!</h1>
            <h3 class="text-sm text-left">인생에 찾아오는 술담화입니다.</h3>
        </div>
        <div class="w-40 m-auto">
            <button class="w-60"><img src="@/assets/btnG_완성형.png"></button><br>
            <button class="w-60"><img src="@/assets/kakao_login_large_narrow.png"></button><br>
            <button class="w-60 bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded" @click="toggle()">이메일로 시작</button>
        </div>
        <div class="w-40 m-auto" v-if="state.isTrue == true">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">이메일</label>
            <input type="email" id="email" class="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"><br>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password1">비밀번호</label>
            <input type="password" id="password1" class="shadow appearance-none border rounded w-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"><br>
            <br>
            <button class="mb-4 w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">로그인</button>
            <button class="w-60 bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"><router-link to="/signup">이메일 회원가입</router-link></button>
            <a class="text-sm font-bold" href="#">아이디 찾기</a> <a class="text-sm font-bold" href="#">비밀번호 찾기</a>
        </div>
    </section>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
    isTrue: false,
    login: false,
})

const toggle = () => {
    if(state.isTrue == false){
        state.isTrue = true;
    }
}

</script>