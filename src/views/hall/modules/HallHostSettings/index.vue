<template>
  <div>
    <PanelTable
      title="添加档时项目"
      :columns="['时间段', '类型', '主持人', '打卡表', '更多']"
      gridColsClass="grid-cols-5">
      <template #action>
        <a-button type="primary">添加主持人</a-button>
      </template>
      <!-- 示例数据行，可后续用数组渲染 -->
      <div
        class="bg-white/45 border-b last:rounded-b-lg px-4 py-3 grid grid-cols-5 items-center text-sm">
        <div class="flex justify-center items-center">08:00-10:00</div>
        <div class="flex justify-center items-center">常规</div>
        <div class="flex justify-center items-center gap-2">
          <img src="/src/assets/a.jpg" class="w-8 h-8 rounded-full" />
          <span>小明</span>
        </div>
        <div class="flex justify-center items-center">
          <a
            href="#"
            class="text-blue-500 hover:underline"
            @click.prevent="copyTable"
            >复制</a
          >
        </div>
        <div class="flex justify-center items-center">
          <span
            class="icon-[ant-design--delete-outlined] text-red-500 cursor-pointer text-lg"></span>
        </div>
      </div>
      <!-- 可复制上面数据行，渲染多条数据 -->
    </PanelTable>
  </div>
</template>

<script lang="ts" setup>
import PanelTable from "@/components/PanelTable.vue";
import { message } from "ant-design-vue";

function copyTable() {
  navigator.clipboard.writeText("打卡表内容").then(() => {
    message.success("复制成功");
  });
}
</script>

<style scoped></style>
