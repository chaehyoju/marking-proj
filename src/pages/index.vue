<template>
    <section><bannerSection></bannerSection></section>
    <section class="container py-32"><specialSection></specialSection></section>
    <section class="bg-gray-50 py-8"><moreSection></moreSection></section>
    <section class="container py-16"><monthSection></monthSection></section>
    <section class="container py-12"><storeSection></storeSection></section>
    <section class="container py-8"><sliderSection></sliderSection></section>
</template>

<script setup>
import bannerSection from "./index/banner.vue";
import monthSection from "./index/month.vue";
import moreSection from "./index/more.vue";
import sliderSection from "./index/slider.vue";
import specialSection from "./index/special.vue";
import storeSection from "./index/store.vue";
</script>