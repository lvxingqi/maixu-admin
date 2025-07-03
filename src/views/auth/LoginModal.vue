<template>
  <CommonModalWrapper>
    <template #default="{ modalWrapper }">
      <a-modal
        :closable="false"
        v-model:open="visible"
        @cancel="handleClose"
        :footer="null"
        autocomplete="off"
        width="700px"
        :getContainer="() => modalWrapper"
        class="login-modal">
        <div class="flex h-[380px]">
          <!-- 左侧品牌区 -->
          <div
            class="flex flex-col items-center justify-center w-2/5 bg-gradient-to-tr from-purple-600 via-pink-400 to-purple-600 rounded-l-xl">
            <img
              src="@/assets/a.jpg"
              alt=""
              class="w-20 h-20 rounded-full mb-4" />
            <div class="text-white text-lg font-bold tracking-widest">
              微聚声
            </div>
          </div>
          <!-- 右侧表单区 -->
          <div
            class="flex-1 flex flex-col justify-center px-10 bg-white/80 rounded-r-xl relative">
            <div
              class="h-12 flex items-center justify-center mb-8 absolute top-0">
              <div class="flex gap-10 font-medium text-gray-600 text-2xl">
                <span
                  :class="
                    showLogin
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'cursor-pointer'
                  "
                  @click="showLogin = true"
                  >登录</span
                >
                <span
                  :class="
                    !showLogin
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'cursor-pointer'
                  "
                  @click="showLogin = false"
                  >注册</span
                >
              </div>
            </div>
            <div v-if="showLogin">
              <div class="!mt-8">
                <a-tabs v-model:activeKey="loginTab" centered>
                  <a-tab-pane key="account" tab="账号密码登录">
                    <a-form
                      class="flex flex-col gap-6"
                      hideRequiredMark
                      :scrollToFirstError="true"
                      :model="formState"
                      name="basic"
                      autocomplete="off"
                      @finish="onFinish"
                      @finishFailed="onFinishFailed">
                      <a-form-item
                        name="username"
                        :rules="[{ required: true, message: '请输入用户名!' }]">
                        <a-input
                          autocomplete="username"
                          v-model:value="formState.username"
                          placeholder="用户名" />
                      </a-form-item>
                      <a-form-item
                        name="password"
                        :rules="[{ required: true, message: '请输入密码!' }]">
                        <a-input-password
                          v-model:value="formState.password"
                          autocomplete="current-password"
                          placeholder="密码" />
                      </a-form-item>
                      <a-form-item>
                        <a-button
                          type="primary"
                          html-type="submit"
                          class="w-full"
                          >登录</a-button
                        >
                      </a-form-item>
                    </a-form>
                  </a-tab-pane>
                  <a-tab-pane key="phone" tab="手机号登录">
                    <a-form
                      ref="formRef"
                      class="flex flex-col gap-6"
                      autocomplete="off"
                      :model="formState">
                      <a-form-item
                        name="phone"
                        :rules="[{ validator: phoneValidator }]">
                        <a-input
                          v-model:value="formState.phone"
                          placeholder="手机号"
                          :maxlength="11" />
                      </a-form-item>
                      <a-form-item
                        name="code"
                        :rules="[{ required: true, message: '请输入验证码!' }]">
                        <div class="flex gap-2">
                          <a-input
                            v-model:value="formState.code"
                            placeholder="验证码"
                            :maxlength="6" />
                          <a-button
                            type="primary"
                            :disabled="countdown > 0"
                            @click="sendCode">
                            <template v-if="countdown > 0"
                              >{{ countdown }}秒后重试</template
                            >
                            <template v-else>获取验证码</template>
                          </a-button>
                        </div>
                      </a-form-item>
                      <a-form-item>
                        <a-button type="primary" class="w-full">登录</a-button>
                      </a-form-item>
                    </a-form>
                  </a-tab-pane>
                </a-tabs>
                <div class="text-xs text-gray-400 text-center mt-2">
                  注册登录即代表同意
                  <a href="#" class="text-blue-500 hover:underline">用户协议</a>
                  和
                  <a href="#" class="text-blue-500 hover:underline">隐私政策</a>
                </div>
              </div>
            </div>
            <div
              v-else
              class="flex flex-col items-center justify-center h-full">
              <img
                class="w-32 h-32 rounded-xl mb-4"
                src="@/assets/a.jpg"
                alt="二维码" />
              <div class="text-gray-500">请扫码注册</div>
            </div>
          </div>
        </div>
      </a-modal>
    </template>
  </CommonModalWrapper>
</template>

<script lang="ts" setup>
import { ref, reactive, getCurrentInstance } from "vue";
import CommonModalWrapper from "../../components/CommonModalWrapper.vue";
import { isValidPhone } from "@/utils/validate";
const emits = defineEmits(["close", "login"]);
interface FormState {
  username: string;
  password: string;
  remember: boolean;
  phone?: string;
  code?: string;
}
const showLogin = ref<boolean>(true);
const loginTab = ref<"account" | "phone">("account");
const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
  phone: "",
  code: "",
});
const visible = defineModel<boolean>("visible", {
  default: false,
  type: Boolean,
});
const countdown = ref(0);
let timer: number | null = null;
const formRef = ref();
const sendCode = async () => {
  if (countdown.value > 0) return;
  // 校验手机号
  try {
    const res = await formRef.value?.validateFields(["phone"]);
    console.log("手机号校验通过", res);
  } catch (e) {
    return; // 校验未通过不执行后续
  }
  countdown.value = 60;
  timer && clearInterval(timer);
  timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      timer && clearInterval(timer);
      timer = null;
    }
  }, 1000);
  // 这里可以加上实际发送验证码的逻辑
};
const onFinish = (values: any) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const handleClose = () => {
  emits("close");
};
function phoneValidator(_rule: any, value: string) {
  if (!value) return Promise.reject("手机号不能为空");
  const trimmed = value.trim();
  if (trimmed.length !== 11) return Promise.reject("手机号长度应为11位");
  if (!isValidPhone(trimmed)) return Promise.reject("请输入正确的手机号");
  return Promise.resolve();
}
</script>

<style scoped>
.login-modal .ant-modal-content {
  padding: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}
</style>
