<template>
  <div
    class="flex h-200 bg-green-600 bg-[url('@/assets/leaf.jpg')] bg-repeat gap-6 px-6 py-4">
    <!-- 左侧房间列表 -->
    <RoomList @select="handleSelect"/>
    <!-- 右侧内容区 -->
    <RightPanel :titles="titles" />
  </div>
</template>

<script lang="ts" setup>
import RoomList from "./layout/RooomList/index.vue";
import RightPanel from "./layout/RightPanel.vue";
interface DataItem {
  name: string;
  code: string;
  up: string;
  date: string;
}



const titles = [
  { title: "数据汇总", routePath: "dataSummary" },
  { title: "厅规则管理", routePath: "hallRulesManagement" },
  { title: "置顶卡管理", routePath: "topCardManagement" },
  { title: "厅管设置", routePath: "hallManagerSettings" },
  { title: "主持设置", routePath: "hallHostSettings" },
  { title: "招聘设置", routePath: "recruitmentSettings" },
  { title: "视频回放", routePath: "videoPlayback" },
];

const handleSelect = (item: DataItem) => {
  console.log("Selected item:", item);
};
</script>

<style scoped>
:deep(.ant-list-item) {
  padding: 0;
  background: transparent;
  border: none;
}
</style>
