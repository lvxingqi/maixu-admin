<template>
  <div class="bg-gradient-to-b from-[#a5b4fc] via-[#6366f1] to-[#4338ca] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 max-w-md w-full">
    <div class="flex gap-6 items-center !mb-4">
      <div class="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow overflow-hidden">
        <img class="w-14 h-14 rounded-full object-cover" src="@/assets/plat-avatar.jpg" alt="" />
      </div>
      <div class="flex flex-col justify-center min-w-0">
        <span class="text-lg font-bold text-white truncate">海柱美声</span>
        <span class="text-sm text-gray-200 !mt-1 break-all">出音频设备/高端调试/ai音频/VX：xixi-03817</span>
      </div>
    </div>
    <div class="bg-white/10 rounded-xl px-4 py-3 text-base text-white font-mono text-center shadow-inner">
      <slot name="details">details</slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
</style>
