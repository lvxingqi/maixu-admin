<template>
  <div class="flex flex-col gap-[1vw]">
    <div class="flex justify-between bg-gradient-to-r from-pink-300 to-purple-400 rounded-2xl">
      <div class="flex flex-col">
        <div class="flex p-4">
          <img src="@/assets/a.jpg" alt="" class="size-10" />
          <span class="text-5xl italic font-semibold">vip</span>
        </div>
        <div class="text-sm p-4">
          <span>1000音符/月</span>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center gap-4 p-8">
        <div class="px-8 py-3 rounded-2xl bg-pink-400">开通</div>
        <div class="text-xs">剩余音符:0</div>
      </div>
    </div>


    <div class="">
      <img src="@/assets/vipGrade.png" alt="" class=" rounded-2xl">
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
