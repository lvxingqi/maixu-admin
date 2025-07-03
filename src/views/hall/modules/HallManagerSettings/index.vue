<template>
  <PanelTable
    title="厅管理设置"
    :columns="['微信成员', '更多']"
    gridColsClass="grid-cols-2">
    <template #action>
      <a-button type="primary">添加厅管理人员</a-button>
    </template>
    <!-- 数据行（示例） -->
    <div
      class="bg-white/45 border-b last:rounded-b-lg px-4 py-3 grid grid-cols-2 items-center text-sm">
      <div class="flex justify-center items-center gap-2">
        <img src="/src/assets/a.jpg" class="w-8 h-8 rounded-full" />
        <span>张三</span>
      </div>
      <div class="flex justify-center items-center">
        <span
          class="icon-[ant-design--delete-outlined] text-red-500 cursor-pointer text-lg"></span>
      </div>
    </div>
    <!-- 可复制上面数据行，渲染多条数据 -->
  </PanelTable>
</template>

<script setup lang="ts">
import PanelTable from "@/components/PanelTable.vue";
// 可后续用数组渲染数据
</script>

<style scoped></style>
