<template>
  <div
    class="bg-gradient-to-b from-purple-500 to-purple-950 h-30 rounded-xl flex flex-col items-center gap-4 justify-center"
  >
    <div><slot name="title"></slot></div>
    <div class="bg-[#6c1fa9] rounded-2xl p-2 hover:bg-white text-[#e39f48]">
      <slot name="price"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
