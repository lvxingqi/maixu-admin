<template>
  <div class="bg-white/30 rounded-2xl px-4 py-2">
    <div class="py-4">
      <a-row justify="space-between" align="middle">
        <a-col :span="20">
          <a-divider orientation="left">报备卡设置</a-divider>
        </a-col>
        <a-col :span="3">
          <div class="rounded-xl bg-pink-300 text-center py-2 px-1 !mr-1 cursor-pointer" @click="openAddModal">
            添加
          </div>
        </a-col>
      </a-row>
      <div class="h-5"></div>
      <div class="flex flex-col gap-2">
        <a-row justify="space-between" class="text-center">
          <a-col
            v-for="(name, idx) in cardNames"
            :key="'head-' + idx"
            :span="8"
            >{{ name }}</a-col
          >
        </a-row>
        <a-row
          v-for="(row, rIdx) in cardRows"
          :key="'row-' + rIdx"
          justify="space-between"
          class="text-center">
          <a-col :span="8">{{ row[0] }}</a-col>
          <a-col :span="8">{{ row[1] }}</a-col>
          <a-col :span="8">
            <div class="flex justify-center gap-3">
              <span class="icon-[ant-design--delete-twotone] cursor-pointer" @click="remove(rIdx)"></span>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <a-modal v-model:open="showAddModal" title="添加统计卡" @ok="saveAdd" @cancel="showAddModal = false">
      <a-form layout="vertical">
        <a-form-item v-for="(_val, idx) in addRow" :key="'add-' + idx" :label="cardNames[idx]">
          <a-input v-model:value="addRow[idx]" />
        </a-form-item>
      </a-form>
      <template #footer>
        <a-button @click="showAddModal = false">取消</a-button>
        <a-button type="primary" @click="saveAdd">添加</a-button>
      </template>
    </a-modal>
    <context-holder/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { message } from "ant-design-vue";
const [messageApi, contextHolder] = message.useMessage();
// 统计卡表头
const cardNames = ["统计名", "统计方式", ""];
// 统计卡数据
const cardRows = ref([
  ["A", "B"],
  ["E", "F"],
  ["I", "J"],
  ["M", "N"],
]);
// 新增相关
const showAddModal = ref(false);
const addRow = ref(["", ""]);
function openAddModal() {
  addRow.value = ["", ""];
  showAddModal.value = true;
}
function saveAdd() {
  cardRows.value.push([...addRow.value]);
  showAddModal.value = false;
  messageApi.success("添加成功");
}
function remove(idx: number) {
  cardRows.value.splice(idx, 1);
  messageApi.success("删除成功");
}
</script>

<style></style>
