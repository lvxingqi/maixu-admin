<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between">
      <div
        class="px-6 py-2 !text-center flex items-center rounded-2xl cursor-pointer transition-all duration-200"
        :class="activeTab === 'dayDetail' ? 'bg-blue-500 text-white shadow-lg scale-105' : 'bg-red-300 text-black'"
        @click="activeTab = 'dayDetail'"
      >
        日详情
        <span class="icon-[ant-design--calendar-outlined] !m-2"></span>
      </div>
      <div
        class="px-6 py-2 !text-center flex items-center rounded-2xl cursor-pointer transition-all duration-200"
        :class="activeTab === 'daySummary' ? 'bg-blue-500 text-white shadow-lg scale-105' : 'bg-red-300 text-black'"
        @click="activeTab = 'daySummary'"
      >
        日汇总
        <span class="icon-[ant-design--pie-chart-outlined] !m-2"></span>
      </div>
      <div
        class="px-6 py-2 !text-center flex items-center rounded-2xl cursor-pointer transition-all duration-200"
        :class="activeTab === 'weekSummary' ? 'bg-blue-500 text-white shadow-lg scale-105' : 'bg-red-300 text-black'"
        @click="activeTab = 'weekSummary'"
      >
        周汇总
        <span class="icon-[ant-design--bar-chart-outlined] !m-2"></span>
      </div>
      <div
        class="px-6 py-2 !text-center flex items-center rounded-2xl cursor-pointer transition-all duration-200"
        :class="activeTab === 'monthSummary' ? 'bg-blue-500 text-white shadow-lg scale-105' : 'bg-red-300 text-black'"
        @click="activeTab = 'monthSummary'"
      >
        月汇总
        <span class="icon-[ant-design--line-chart-outlined] !m-2"></span>
      </div>
    </div>
    <div class="flex flex-1 rounded-2xl min-h-[200px]">
      <SummaryTable :mode="activeTab" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SummaryTable from './SummaryTable.vue';
const activeTab = ref('dayDetail');
</script>

<style>
</style>