<template>
  <div class="w-full min-h-[280px] bg-white/90 rounded-2xl shadow p-6 flex flex-col justify-center items-center">
    <div class="flex justify-between h-20 items-center">
      <span>优质调音师介绍</span>
      <span>查看更多</span>
    </div>
    <div class="grid grid-cols-2 gap-[1vw] justify-items-stretch">
      <div v-for="n in 2" :key="n">
        <QualityCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import QualityCard from "@/components/card/QualityCard.vue";
</script>

<style scoped>
</style>
