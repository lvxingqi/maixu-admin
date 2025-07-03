<template>
  <div>
    <div ref="phoneNextModalWrapperRef">
      <a-modal
        v-model:open="visible"
        @ok="next"
        cancelText="取消"
        okText="确认"
        title="修改手机号"
        :getContainer="() => phoneNextModalWrapperRef"
        autocomplete="off"
        class="flex flex-col"
        :closable="false"
      >
        <a-form :model="formState">
          <a-form-item label="新手机号" name="avatar" :labelCol="{ span: 8 }">
            <a-input v-model:value="formState.phone"></a-input>
          </a-form-item>
          <a-form-item label="验证码" name="nickname" :labelCol="{ span: 8 }">
            <a-input v-model:value="formState.code"></a-input>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
    <context-holder />
  </div>
</template>

<script lang="ts" setup>
import { reactive, useTemplateRef } from "vue";
import { isValidPhone } from "../../../utils/validate";
import { message } from "ant-design-vue";

const visible = defineModel<boolean>("visible"); // defineProps+defineEmits+computed中间变量写法
const [messageApi, contextHolder] = message.useMessage();
const phoneNextModalWrapperRef = useTemplateRef<HTMLDivElement>(
  "phoneNextModalWrapperRef"
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
    // 将新手机号传给服务器，验证成功后提示用户
    messageApi.success("修改成功！");
  }
};
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
