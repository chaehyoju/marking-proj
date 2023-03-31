<template>
	<my-header />
	<router-view :key="route.fullPath"></router-view>
	<my-footer />
</template>

<script setup>
// header, footer는 HTML5 시멘틱 태그이므로 이걸 이름으로 쓸 수는 없어서, my를 앞에 붙여서 구분을 해 주었습니다.
// script에서는 camelCase, template에서는 kebab-case
import { useRoute } from "vue-router";
import myHeader from "@/components/header.vue";
import myFooter from "@/components/footer.vue";

const route = useRoute();
</script>