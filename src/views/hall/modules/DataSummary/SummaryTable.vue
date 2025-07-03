<template>
  <div class="overflow-hidden">
    <!-- 顶部表单区域 -->
    <div class="bg-white/30 rounded-2xl shadow p-4 mb-6">
      <a-row :gutter="16" align="bottom">
        <!-- 左侧：时间范围、时间段（可选） -->
        <a-col :span="16">
          <div class="flex justify-between ">
            <div class="flex gap-4">
              <div class="flex flex-col min-w-[120px] flex-1">
                <label class="mb-1 text-xs text-gray-600 font-medium"
                  >时间范围</label
                >
                <template v-if="props.mode === 'weekSummary'">
                  <a-select
                    class="w-full text-xs"
                    size="small"
                    placeholder="请选择周">
                    <a-select-option value="thisWeek">本周</a-select-option>
                    <a-select-option value="lastWeek">上周</a-select-option>
                  </a-select>
                </template>
                <template v-else-if="props.mode === 'monthSummary'">
                  <a-range-picker
                    class="w-full text-xs"
                    size="small"
                    :placeholder="['开始时间', '结束时间']"
                    format="YYYY-MM-DD" />
                </template>
                <template v-else>
                  <a-date-picker
                    class="w-full text-xs"
                    size="small"
                    placeholder="请选择日期" />
                </template>
              </div>
              <div
                v-if="showTimeSection"
                class="flex flex-col min-w-[140px] max-w-[180px] flex-1">
                <label class="mb-1 text-xs text-gray-600 font-medium"
                  >时间段</label
                >
                <div class="flex items-center gap-1">
                  <a-input-number
                    class="w-16 text-xs"
                    size="small"
                    placeholder="开始" />
                  <span class="mx-1 text-gray-400 text-xs">-</span>
                  <a-input-number
                    class="w-16 text-xs"
                    size="small"
                    placeholder="结束" />
                </div>
              </div>
            </div>
            <div class="flex flex-col min-w-[100px] max-w-[140px] flex-1">
              <label class="mb-1 text-xs text-gray-600 font-medium"
                >主持人</label
              >
              <a-select
                class="w-full text-xs"
                size="small">
                <a-select-option value="">全部</a-select-option>
                <a-select-option value="主持人A">主持人A</a-select-option>
                <a-select-option value="主持人B">主持人B</a-select-option>
              </a-select>
            </div>
          </div>
        </a-col>
        <!-- 右侧：主持人选择、按钮组 -->
        <a-col :span="8">
          <div class="flex gap-4 items-end">
            <div class="flex gap-1 ml-auto">
              <a-button type="primary" size="small">查询</a-button>
              <a-button type="success" size="small">导出Excel</a-button>
              <a-button type="default" size="small">添加</a-button>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 表格区域 -->
    <div class="bg-white/30 rounded-2xl shadow p-4 h-130">
      <a-table
        :columns="computedColumns"
        :data-source="dataSource"
        row-key="id"
        :sticky="true"
        :scroll="{ y: 420 }"
        class="overflow-auto"
        :pagination="false"
        size="small">
        <template #emptyText>
          <div
            class="flex flex-col items-center justify-center h-full text-gray-500">
            <span class="icon-[ant-design--inbox-outlined] size-20"></span>
            <span class="text-gray-400">暂无数据</span>
          </div>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'avatar'">
            <div class="flex justify-center items-center">
              <img :src="record.avatar" class="w-8 h-8 rounded-full" />
            </div>
          </template>
          <template v-else-if="column.dataIndex === 'action' && showAction">
            <div class="flex items-center justify-around">
              <span
                class="icon-[ant-design--edit-outlined] text-blue-500 cursor-pointer mr-2"></span>
              <span
                class="icon-[ant-design--delete-outlined] text-red-500 cursor-pointer"></span>
            </div>
          </template>
          <template v-else-if="column.dataIndex === 'time'">
            {{ formatTime(record.time) }}
          </template>
          <template v-else>
            <div class="flex justify-center items-center">
              {{ record[column.dataIndex as keyof typeof record] }}
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps({
  mode: { type: String, default: "dayDetail" }, // dayDetail 或 daySummary
});
function formatTime(val: string) {
  if (!val) return "";
  if (val.includes("-")) {
    const arr = val.split("-");
    if (arr.length === 2) {
      const h1 = arr[0].split(":")[0];
      const h2 = arr[1].split(":")[0];
      return `${h1}-${h2}`;
    }
    return val;
  }
  const parts = val.split(":");
  if (parts.length >= 2) {
    return `${parts[0]}-${parts[1]}`;
  }
  return val;
}
const columns = [
  { title: "时段", dataIndex: "time", align: "center" },
  { title: "昵称", dataIndex: "nickname", align: "center" },
  { title: "头像", dataIndex: "avatar", align: "center" },
  { title: "普通麦序", dataIndex: "normal", align: "right" },
  { title: "主持麦序", dataIndex: "host", align: "right" },
  { title: "通宵麦序", dataIndex: "overnight", align: "right" },
  { title: "任务", dataIndex: "task", align: "right" },
  { title: "活跃", dataIndex: "active", align: "right" },
  { title: "收光", dataIndex: "shouguang", align: "right" },
  { title: "黑麦", dataIndex: "heimai", align: "right" },
  { title: "操作", dataIndex: "action", align: "center" },
];
const computedColumns = computed(() => {
  if (
    props.mode === "daySummary" ||
    props.mode === "weekSummary" ||
    props.mode === "monthSummary"
  ) {
    // 汇总类都不显示操作列
    return columns.filter((col) => col.dataIndex !== "action");
  }
  return columns;
});
const showTimeSection = computed(() => props.mode === "dayDetail");
const showAction = computed(() => props.mode === "dayDetail");
const dataSource = ref([
  {
    id: 1,
    time: "08:00-09:00",
    nickname: "小明",
    avatar: "/src/assets/a.jpg",
    normal: 5,
    host: 2,
    overnight: 1,
    task: 3,
    active: 8,
    shouguang: 6,
    heimai: 0,
  },
  // ...可复用日详情的数据结构...
]);
</script>

<style scoped>
:deep(.ant-table-thead > tr > th) {
  text-align: center !important;
}
</style>
