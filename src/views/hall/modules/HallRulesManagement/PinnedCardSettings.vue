<template>
  <div class="bg-white/30 rounded-2xl px-4 py-2">
    <div class="py-4">
      <a-row justify="space-between" align="middle">
        <a-col :span="20"
          ><a-divider orientation="left">置顶卡设置</a-divider></a-col
        ><a-col :span="3"
          ><div class="rounded-xl bg-pink-300 text-center py-2 px-1 !mr-1 cursor-pointer" @click="openAddModal">
            添加
          </div></a-col
        >
      </a-row>
      <a-row align="middle">
        <a-col :span="12">
          <div class="flex items-center gap-5">
            <div>置顶卡数量</div>
            <a-input type="number" class="!w-40"></a-input>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="flex items-center gap-5">
            <div>无需发放置顶卡</div>
            <a-switch
              v-model:checked="checked"
              checked-children="开启"
              un-checked-children="关闭"></a-switch>
          </div>
        </a-col>
      </a-row>
      <div class="h-5"></div>
      <div class="flex flex-col gap-2">
        <a-row justify="space-between" class="text-center">
          <a-col
            v-for="(name, idx) in cardNames"
            :key="'head-' + idx"
            :span="6"
            >{{ name }}</a-col
          >
        </a-row>
        <a-row
          v-for="(row, rIdx) in cardRows"
          :key="'row-' + rIdx"
          justify="space-between"
          class="text-center">
          <a-col
            v-for="(cell, cIdx) in row"
            :key="'cell-' + rIdx + '-' + cIdx"
            :span="6"
            >{{ cell }}</a-col
          >
          <a-col :span="6">
            <div class="flex justify-center gap-3">
              <span class="icon-[ant-design--edit-outlined] cursor-pointer" @click="edit(rIdx)"></span>
              <span class="icon-[ant-design--delete-twotone] cursor-pointer" @click="remove(rIdx)"></span>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <a-modal v-model:open="showEditModal" title="编辑置顶卡" @ok="saveEdit" @cancel="showEditModal = false">
      <a-form layout="vertical">
        <a-form-item v-for="(_val, idx) in editRow" :key="'edit-' + idx" :label="cardNames[idx]">
          <a-input v-model:value="editRow[idx]" />
        </a-form-item>
      </a-form>
      <template #footer>
        <a-button @click="showEditModal = false">取消</a-button>
        <a-button type="primary" @click="saveEdit">保存</a-button>
      </template>
    </a-modal>
    <a-modal v-model:open="showAddModal" title="添加置顶卡" @ok="saveAdd" @cancel="showAddModal = false">
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
const checked = ref(false);
// 置顶卡表头
const cardNames = ["置顶卡名", "最大数量", "任务值", "更多"];
// 置顶卡数据
const cardRows = ref([
  ["A", "B", "C"],
  ["E", "F", "G"],
  ["I", "J", "K"],
  ["M", "N", "O"],
  ["Q", "R", "S"],
]);

// 编辑相关
const showEditModal = ref(false);
const editIndex = ref(-1);
const editRow = ref(["", "", ""]);
function edit(idx: number) {
  editIndex.value = idx;
  editRow.value = [...cardRows.value[idx]];
  showEditModal.value = true;
}
function saveEdit() {
  if (editIndex.value !== -1) {
    cardRows.value[editIndex.value] = [...editRow.value];
    showEditModal.value = false;
    messageApi.success("修改成功");
  }
}
function remove(idx: number) {
  cardRows.value.splice(idx, 1);
  messageApi.success("删除成功");
}
// 新增相关
const showAddModal = ref(false);
const addRow = ref(["", "", ""]);
function openAddModal() {
  addRow.value = ["", "", ""];
  showAddModal.value = true;
}
function saveAdd() {
  cardRows.value.push([...addRow.value]);
  showAddModal.value = false;
  messageApi.success("添加成功");
}
</script>

<style></style>
