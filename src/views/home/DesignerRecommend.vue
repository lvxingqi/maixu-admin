<template>
  <div class="w-full min-h-[220px] bg-white/90 rounded-2xl shadow p-6 flex flex-col">
    <div class="flex justify-between items-center mb-4 h-14">
      <span class="text-lg font-semibold">UI设计师介绍</span>
      <span class="text-blue-500 cursor-pointer hover:underline">查看更多</span>
    </div>
    <div class="grid grid-cols-3 gap-6 flex-1">
      <div v-for="n in 3" :key="n">
        <DesignerCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DesignerCard from "@/components/card/DesignerCard.vue";
</script>

<style scoped>
</style>
