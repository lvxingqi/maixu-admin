<template>
  <div class="flex flex-col items-center bg-gradient-to-b from-[#a5b4fc] via-[#6366f1] to-[#4338ca] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 max-w-xs w-full p-6">
    <div class="relative flex flex-col items-center w-full">
      <div class="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center shadow-md !mb-[-2.5rem] z-10">
        <img src="@/assets/a.jpg" alt="" class="w-16 h-16 rounded-full object-cover" />
      </div>
      <div class="flex flex-col items-center gap-2 w-full bg-white/10 rounded-xl pt-12 pb-4 px-4 mt-0">
        <span class="text-lg font-bold text-white">用户名</span>
        <span class="text-sm text-gray-200">联系方式</span>
        <div class="w-full bg-white/10 rounded-xl mt-2 overflow-hidden flex items-center justify-center">
          <img src="@/assets/a.jpg" alt="" class="w-full h-28 object-cover rounded-xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
</style>
