<template>
  <div class="p-6 flex flex-col gap-4 bg-white/20 rounded-2xl">
    <!-- 顶部栏 -->
    <a-row align="middle" class="mb-4">
      <a-col><span class="text-xl font-bold">{{ title }}</span></a-col>
      <a-col flex="auto"></a-col>
      <a-col>
        <slot name="action"></slot>
      </a-col>
    </a-row>
    <div>
      <!-- 列标题 -->
      <div :class="['bg-gray-100/30 rounded-t-lg px-4 py-2 grid font-semibold text-gray-700 text-sm', gridColsClass]">
        <template v-for="(col, idx) in columns" :key="idx">
          <div class="flex justify-center items-center">{{ col }}</div>
        </template>
      </div>
      <!-- 数据行 -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  columns: string[];
  gridColsClass?: string;
}>();
</script>

<style scoped></style>
