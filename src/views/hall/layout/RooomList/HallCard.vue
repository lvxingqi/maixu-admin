<template>
  <div
    class="flex p-4 rounded-xl bg-gradient-to-br from-sky-400/60 to-purple-400/70 backdrop-blur-md shadow-lg justify-center gap-2 items-center w-full min-w-[0px] max-w-[380px] hover:shadow-2xl transition-shadow duration-200"
  >
    <div class="size-20 flex items-center justify-center rounded-lg overflow-hidden bg-sky-200/40">
      <slot name="image"> </slot>
    </div>
    <div class="text-xs flex flex-col flex-1 text-white">
      <slot name="introduction"> </slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
</style>

