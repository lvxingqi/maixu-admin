<template>
  <div
    class="flex flex-col bg-purple-800/30 rounded-2xl shadow-lg overflow-hidden flex-1">
    <div
      class="flex gap-2 px-6 py-3 border-b border-gray-200 bg-purple-900/40 justify-center">
      <div
        v-for="(item, _index) in titles"
        :key="item.routePath"
        class="p-2 rounded-lg cursor-pointer text-sky-100 hover:bg-sky-900/20 transition"
        :class="{
          'bg-sky-200/40 text-white font-bold': currentTab === item.routePath,
        }"
        @click="currentTab = item.routePath">
        {{ item.title }}
      </div>
    </div>
    <div class="flex-1 p-6 overflow-auto">
      <component :is="currentView" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import {
  DataSummary,
  HallHostSettings,
  HallRulesManagement,
  RecruitmentSettings,
  TopCardManagement,
  VideoPlayback,
  HallManagerSettings,
} from "../modules";
const props = defineProps<{ titles: { title: string; routePath: string }[] }>();
const tabMap = {
  dataSummary: DataSummary,
  hallHostSettings: HallHostSettings,
  hallRulesManagement: HallRulesManagement,
  recruitmentSettings: RecruitmentSettings,
  topCardManagement: TopCardManagement,
  videoPlayback: VideoPlayback,
  hallManagerSettings: HallManagerSettings,
};
const currentTab = ref(props.titles[0]?.routePath || "dataSummary");
const currentView = computed(
  () => tabMap[currentTab.value as keyof typeof tabMap] || null
);
</script>

<style scoped></style>
