<template>
  <div>
    <div ref="userInfoModalWrapperRef">
      <a-modal
        v-model:open="visible"
        @ok="visible = false"
        title="修改个人资料"
        :getContainer="() => userInfoModalWrapperRef"
        autocomplete="off"
        class="flex flex-col"
        :closable="false"
      >
        <a-form :model="props.user">
          <a-form-item label="头像" name="avatar" :labelCol="{ span: 8 }">
            <img :src="props.user.avatar" alt="" class="size-10 rounded-full" />
          </a-form-item>
          <a-form-item label="昵称" name="nickname" :labelCol="{ span: 8 }">
            <a-input v-model:value="props.user.nickname"></a-input>
          </a-form-item>
          <a-form-item label="性别" name="sex" :labelCol="{ span: 8 }">
            <a-select :options="sexOptions" v-model:value="props.user.sex">
            </a-select>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SelectProps } from "ant-design-vue";
import { ref, useTemplateRef, watch } from "vue";

const visible = defineModel<boolean>("visible"); // defineProps+defineEmits+computed中间变量写法
// const user = defineModel<any>("user");
const props = defineProps(["user"]);

watch(
  () => props.user,
  (val) => {
    console.log(val);
  },
  { deep: true }
);

const userInfoModalWrapperRef = useTemplateRef<HTMLDivElement>(
  "userInfoModalWrapperRef"
);

const sexOptions = ref<SelectProps["options"]>([
  { label: "未知", value: 0 },
  { label: "男", value: 1 },
  { label: "女", value: 2 },
]);
</script>

<style scoped>
@import "tailwindcss";
:deep(.ant-modal-header) {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
}

:deep(.ant-modal-content) {
  background-color: rgba(56, 33, 87, 0.3);
  padding-top: 40px;
  height: 400px;
  backdrop-filter: blur(10px);
}
:deep(.ant-modal-footer) {
  display: flex;
  justify-content: space-around;
}
:deep(.ant-form) {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
