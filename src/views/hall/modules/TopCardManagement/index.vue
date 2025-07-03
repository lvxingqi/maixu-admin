<template>
  <div>
    <PanelTable
      title="置顶卡管理"
      :columns="['微信成员', '置顶卡名称', '置顶卡数量', '置顶卡有效期', '更多']"
      gridColsClass="grid-cols-5"
    >
      <template #action>
        <a-button type="primary" @click="showModal = true">添加置顶卡</a-button>
      </template>
      <div
        v-for="(item, idx) in data"
        :key="item.id"
        class="bg-white/45 border-b last:rounded-b-lg px-4 py-3 grid grid-cols-5 items-center text-sm group"
      >
        <div class="flex justify-center items-center gap-2">
          <img :src="item.avatar" class="w-8 h-8 rounded-full" />
          <span>{{ item.name }}</span>
        </div>
        <div class="flex justify-center items-center">
          {{ item.cardName }}
        </div>
        <div class="flex justify-center items-center">{{ item.count }}</div>
        <div class="flex justify-center items-center">{{ item.expire }}</div>
        <div class="flex justify-center items-center">
          <span
            class="icon-[ant-design--delete-outlined] text-red-500 cursor-pointer text-lg hover:text-red-700 transition"
            @click="handleDelete(idx)"
          ></span>
        </div>
      </div>
      <contextHolder />
      <!-- 添加置顶卡 Modal -->
      <a-modal
        v-model:open="showModal"
        title="添加置顶卡"
        :footer="null"
        @cancel="resetForm"
      >
        <a-form :model="form" layout="vertical" @submit.prevent="onAdd">
          <a-form-item label="微信成员昵称" required>
            <a-input v-model:value="form.name" placeholder="请输入成员昵称" />
          </a-form-item>
          <a-form-item label="头像链接">
            <a-input
              v-model:value="form.avatar"
              placeholder="请输入头像图片地址"
            />
          </a-form-item>
          <a-form-item label="置顶卡名称" required>
            <a-input
              v-model:value="form.cardName"
              placeholder="请输入置顶卡名称"
            />
          </a-form-item>
          <a-form-item label="置顶卡数量" required>
            <a-input-number
              v-model:value="form.count"
              :min="1"
              class="w-full"
              placeholder="请输入数量"
            />
          </a-form-item>
          <a-form-item label="有效期" required>
            <a-date-picker
              v-model:value="form.expire"
              show-time
              format="YYYY-MM-DD HH:mm:ss"
              class="w-full"
              placeholder="请选择有效期"
            />
          </a-form-item>
          <div class="flex justify-end gap-2">
            <a-button @click="resetForm">取消</a-button>
            <a-button type="primary" html-type="submit">确定</a-button>
          </div>
        </a-form>
      </a-modal>
    </PanelTable>
    <!-- 分界线 -->
    <div class="my-6 h-[2px] bg-gray-200/60 rounded-full"></div>
    <!-- 禁排管理 -->
    <PanelTable
      title="禁排管理"
      :columns="['微信名', '更多']"
      gridColsClass="grid-cols-2"
    >
      <template #action>
        <a-button type="primary">添加禁排</a-button>
      </template>
      <div
        v-for="(item, idx) in banData"
        :key="item.id"
        class="bg-white/45 border-b last:rounded-b-lg px-4 py-3 grid grid-cols-2 items-center text-sm group"
      >
        <div class="flex justify-center items-center gap-2">
          <img :src="item.avatar" class="w-8 h-8 rounded-full" />
          <span>{{ item.name }}</span>
        </div>
        <div class="flex justify-center items-center">
          <span
            class="icon-[ant-design--delete-outlined] text-red-500 cursor-pointer text-lg hover:text-red-700 transition"
            @click="handleBanDelete(idx)"
          ></span>
        </div>
      </div>
    </PanelTable>
  </div>
</template>

<script setup lang="ts">
import PanelTable from '@/components/PanelTable.vue';
import { ref } from "vue";
import { message } from "ant-design-vue";
const [msgApi, contextHolder] = message.useMessage();

const data = ref([
  {
    id: 1,
    avatar: "/src/assets/a.jpg",
    name: "张三",
    cardName: "超级置顶卡",
    count: 3,
    expire: "2025-07-02 14:30:00",
  },
  {
    id: 2,
    avatar: "/src/assets/b.jpg",
    name: "李四",
    cardName: "普通置顶卡",
    count: 1,
    expire: "2025-08-01 10:00:00",
  },
]);

const banData = ref([
  { id: 1, avatar: '/src/assets/a.jpg', name: '王五' },
  { id: 2, avatar: '/src/assets/b.jpg', name: '赵六' },
]);

const showModal = ref(false);
const form = ref({
  name: "",
  avatar: "",
  cardName: "",
  count: 1,
  expire: undefined as any, // 兼容 dayjs 类型
});

function resetForm() {
  showModal.value = false;
  form.value = { name: "", avatar: "", cardName: "", count: 1, expire: "" };
}

function onAdd() {
  if (
    !form.value.name ||
    !form.value.cardName ||
    !form.value.count ||
    !form.value.expire
  ) {
    msgApi.error("请填写完整信息");
    return;
  }
  data.value.push({
    id: Date.now(),
    avatar: form.value.avatar || "/src/assets/a.jpg",
    name: form.value.name,
    cardName: form.value.cardName,
    count: form.value.count,
    expire:
      typeof form.value.expire === "string"
        ? form.value.expire
        : form.value.expire?.format
        ? form.value.expire.format("YYYY-MM-DD HH:mm:ss")
        : "",
  });
  msgApi.success("添加成功");
  resetForm();
}

function handleDelete(idx: number) {
  data.value.splice(idx, 1);
  msgApi.success("删除成功");
}

function handleBanDelete(idx: number) {
  banData.value.splice(idx, 1);
  msgApi.success('删除成功');
}
</script>

<style scoped></style>
