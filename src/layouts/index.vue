<template>
	<Header></Header>
	<router-view></router-view>
	<Footer></Footer>
</template>

<script setup>
import { useRoute } from "vue-router";
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

</script>