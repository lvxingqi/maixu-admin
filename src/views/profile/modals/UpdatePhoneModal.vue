<template>
  <div>
    <div ref="phoneModalWrapperRef">
      <a-modal
        v-model:open="visible"
        @ok="next"
        cancelText="取消"
        okText="下一步"
        title="修改手机号"
        :getContainer="() => phoneModalWrapperRef"
        autocomplete="off"
        class="flex flex-col"
        :closable="false"
      >
        <a-form :model="formState">
          <a-form-item label="原手机号" name="avatar" :labelCol="{ span: 8 }">
            <a-input v-model:value="formState.phone"></a-input>
          </a-form-item>
          <a-form-item label="验证码" name="nickname" :labelCol="{ span: 8 }">
            <a-input v-model:value="formState.code"></a-input>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
    <UpdatePhoneModalNext v-model:visible="showPhoneNext" />
    <context-holder />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, useTemplateRef } from "vue";
import UpdatePhoneModalNext from "./UpdatePhoneModalNext.vue";
import { isValidPhone } from "../../../utils/validate";
import { message } from "ant-design-vue";
const [messageApi, contextHolder] = message.useMessage();

const visible = defineModel<boolean>("visible"); // defineProps+defineEmits+computed中间变量写法

const phoneModalWrapperRef = useTemplateRef<HTMLDivElement>(
  "phoneModalWrapperRef"
);
const formState = reactive({
  phone: "", // 手机号
  code: "", // 验证码
});
const next = () => {
  const isValid = isValidPhone(formState.phone);
  if (!isValid) {
    messageApi.warning("非法手机号,请重新输入！！！");
    return false;
  } else {
    visible.value = false;
    showPhoneNext.value = true;
    // 这里应该是短信验证码校验，短信验证码校验成功后，打开新手机号修改框
  }
};
const showPhoneNext = ref(false);
</script>

<style scoped>
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
  padding-right: 20%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
