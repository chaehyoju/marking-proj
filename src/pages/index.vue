<template>
  <section class="container py-16"><hero-section></hero-section></section>
  <section class="bg-gray-400">
    <div class="max-w-[1500px] mx-auto"><rolling-section></rolling-section></div>
  </section>
    <section class="container py-8"><latest-section></latest-section></section>
    <section class="container py-8"><taste-section></taste-section></section>
    <section class="container py-8"><top10-section></top10-section></section>
    <section class="py-12"><cta-section></cta-section></section>
    <section class="container py-12"><contents-section></contents-section></section>
    <section class="container"><movies-section></movies-section></section>
</template>

<script setup>
import heroSection from "./index/hero.vue";
import rollingSection from "./index/rolling.vue";
import latestSection from "./index/latest.vue";
import tasteSection from "./index/taste.vue";
import top10Section from "./index/top10.vue";
import ctaSection from "./index/cta.vue";
import contentsSection from "./index/contents.vue";
import moviesSection from "./index/movies.vue";
</script>