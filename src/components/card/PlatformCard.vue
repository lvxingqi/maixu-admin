<template>
  <div
    class="flex flex-col items-center gap-4 bg-gradient-to-b from-[#a5b4fc] via-[#6366f1] to-[#4338ca] p-8 rounded-2xl shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl max-w-xs w-full min-w-[220px]"
  >
    <div class="flex items-center justify-center w-20 h-20 rounded-full bg-white !mb-2 overflow-hidden">
      <slot name="avatar" />
    </div>
    <div class="text-lg font-semibold text-white !mb-1">
      <slot name="username" />
    </div>
    <div class="text-sm text-white font-mono !mb-2 text-center px-2">
      <slot name="introduction" />
    </div>
    <div class="!my-2">
      <slot name="QRCode" />
    </div>
    <div class="text-xs text-sky-200 flex items-center flex-col !mt-2">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
</style>
