<template>
  <div class="bg-purple-800/30 rounded-2xl shadow-lg w-65 flex flex-col overflow-auto">
    <a-list :dataSource="filteredData" class="flex-1 flex flex-col">
      <template #header>
        <div class="px-4 pt-4 pb-2">
          <a-input-search
            v-model:value="searchValue"
            placeholder="请输入房间ID"
            :loading="false"
            enter-button
            class="!rounded-xl"></a-input-search>
        </div>
      </template>
      <template #renderItem="{ item, index }">
        <a-list-item class="!px-4 !py-2">
          <HallCard
            :class="selectedIndex === index ? 'ring-3 ring-sky-500 scale-103 bg-white/70 shadow-2xl' : ''"
            @click="handleSelect(item, index)"
          >
            <template #image>
              <img src="@/assets/a.jpg" alt="" />
            </template>
            <template #introduction>
              <div>{{ item.name }}</div>
              <div>{{ item.code }}</div>
              <div>{{ item.up }}</div>
              <div>{{ item.date }} 到期</div>
              <div class="flex justify-end">
                <div
                  @click.stop="renewval(item.code)"
                  class="text-sky-200 cursor-pointer hover:underline">
                  续费
                </div>
              </div>
            </template>
          </HallCard>
        </a-list-item>
      </template>
      <template #footer>
        <div
          class="bg-pink-300 rounded-2xl text-center py-4 !m-4 cursor-pointer hover:bg-pink-400 transition flex items-center justify-center gap-2">
          <span class="icon-[ant-design--plus-outlined] text-lg"></span>
          <span>创建房间</span>
        </div>
      </template>
    </a-list>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue';
import HallCard from './HallCard.vue';
const emit = defineEmits<{
  (e: 'select', item: any): void
}>();
interface DataItem {
  name: string;
  code: string;
  up: string;
  date: string;
}
const data: DataItem[] = [
  {
    name: "多咪星球",
    code: "65535",
    up: "金牌女神",
    date: "2025-07-12",
  },
  {
    name: "咪星球",
    code: "25535",
    up: "金牌女神",
    date: "2025-07-12",
  },
  {
    name: "多咪星球",
    code: "45531",
    up: "金牌女神",
    date: "2025-07-12",
  },
  {
    name: "多咪星球",
    code: "95436",
    up: "金牌女神",
    date: "2025-07-12",
  },
  {
    name: "多咪星球",
    code: "65535",
    up: "金牌女神",
    date: "2025-07-12",
  },
  {
    name: "多咪星球",
    code: "65535",
    up: "金牌女神",
    date: "2025-07-12",
  },
  {
    name: "多咪星球",
    code: "65535",
    up: "金牌女神",
    date: "2025-07-12",
  },
  {
    name: "多咪星球",
    code: "65535",
    up: "金牌女神",
    date: "2025-07-12",
  },
  {
    name: "多咪星球",
    code: "65535",
    up: "金牌女神",
    date: "2025-07-12",
  },
  {
    name: "多咪星球",
    code: "65535",
    up: "金牌女神",
    date: "2025-07-12",
  },
  {
    name: "多咪星球",
    code: "65535",
    up: "金牌女神",
    date: "2025-07-12",
  },
  {
    name: "多咪星球",
    code: "65535",
    up: "金牌女神",
    date: "2025-07-12",
  },
  {
    name: "多咪星球",
    code: "65535",
    up: "金牌女神",
    date: "2025-07-12",
  },
  {
    name: "多咪星球",
    code: "65535",
    up: "金牌女神",
    date: "2025-07-12",
  },
];

const searchValue = ref('');
const selectedIndex = ref<number | null>(null);
const filteredData = computed(() => {
  if (!searchValue.value) return data;
  return data.filter(item => item.code.startsWith(searchValue.value));
});
function renewval(code: string) {
  // 可根据需要自定义续费逻辑
  console.log(code, ':续费了');
}
function handleSelect(item: any, index: number) {
  selectedIndex.value = index;
  emit('select', item);
}
</script>

<style scoped></style>
