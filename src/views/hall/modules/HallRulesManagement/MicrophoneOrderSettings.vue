<template>
  <div>
    <CommonModalWrapper>
      <template #default="{ modalWrapper }">
        <a-modal
          v-model:open="open"
          :getContainer="() => modalWrapper"
          :footer="null"
        >
          <div class="flex justify-around">
            <a-select
              :options="[
                { label: '商扣派群', value: 0 },
                { label: '一生所爱', value: 1 },
              ]"
              placeholder="请选择想要复制的厅"
            >
            </a-select>
            <a-button class="!bg-amber-500 !border-0">确认</a-button>
          </div>
        </a-modal>
      </template>
    </CommonModalWrapper>
    <div class="bg-white/30 rounded-2xl px-4 py-2">
      <a-divider orientation="left"> 麦序基本设置 </a-divider>
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 10 }"
        :wrapper-col="{ span: 14 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
        hide-required-mark
        :colon="false"
      >
        <div>
          <a-row>
            <a-col :span="12">
              <a-form-item label="总开关">
                <a-switch v-model:checked="formState.isMainSwitchEnabled" />
              </a-form-item>
            </a-col>
            <a-col :span="6"> </a-col>
            <a-col :span="6" class="flex items-center">
              <div
                @click="openModal"
                class="inline-block bg-[#1677ff] rounded-md px-4 py-1 cursor-pointer shadow-md select-none transition-colors duration-200 hover:bg-[#409eff]"
              >
                引用其他厅规则
              </div>
            </a-col>
          </a-row>
          <a-divider />

          <a-row>
            <a-col :span="12">
              <a-form-item label="打指定人">
                <a-switch
                  v-model:checked="formState.isTargetUserSwitchEnabled"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-form-item
                label="任务设置"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 18 }"
              >
                <a-textarea v-model:value="formState.taskSettings" />
              </a-form-item>
            </a-col>
          </a-row>
        </div>

        <a-divider />
        <div>
          <a-row>
            <a-col :span="12">
              <a-form-item label="发麦序@所有人">
                <a-switch
                  v-model:checked="
                    formState.isAtAllSwitchEnabled
                  " /></a-form-item
            ></a-col>
            <a-col :span="12">
              <a-form-item>
                <a-tooltip>
                  <template #title
                    >开启后请在群内给机器人设置为群管理员，否则不能正常使用</template
                  >
                  <span
                    class="icon-[ant-design--question-circle-filled] size-5"
                    style="color: #b02bff"
                  ></span>
                </a-tooltip>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="开始时间" :wrapper-col="{ span: 8 }">
                <a-time-picker
                  v-model:value="formState.startTime"
                  format="mm"
                  :showNow="false"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <div class="flex justify-around !ml-5">
                <a-form-item label="轮麦序" :label-col="{ span: 20 }">
                  <a-switch
                    v-model:checked="formState.isRotationSwitchEnabled"
                  ></a-switch>
                </a-form-item>
                <a-form-item :label-col="{ span: 0 }">
                  <a-tooltip class="flex items-center">
                    <template #title
                      >麦上群内发自己的麦位置，不发记黑麦</template
                    >
                    <span
                      class="icon-[ant-design--question-circle-filled] size-5"
                      style="color: #b02bff"
                    ></span>
                  </a-tooltip>
                </a-form-item>
              </div>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="结束时间" :wrapper-col="{ span: 8 }">
                <a-time-picker
                  v-model:value="formState.startTime"
                  format="mm"
                  :showNow="false"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="仅用轮麦序" :label-col="{ span: 10 }">
                <a-switch
                  v-model:checked="formState.isOnlyRotationSwitchEnabled"
                ></a-switch>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="插队截止时间" :wrapper-col="{ span: 8 }">
                <a-time-picker
                  v-model:value="formState.startTime"
                  format="mm"
                  :showNow="false"
                /> </a-form-item
            ></a-col>
            <a-col :span="12">
              <a-form-item
                label="轮麦黑麦自动作废"
                :label-col="{ span: 10, offset: 0 }"
              >
                <a-switch
                  v-model:checked="formState.isAutoInvalidBlackMicSwitchEnabled"
                ></a-switch>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="插队类型" :wrapper-col="{ span: 8 }">
                <a-select :options="queueJumpingTypeOptions"></a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="轮麦开始时间"
                :label-col="{ span: 7 }"
                :wrapper-col="{ span: 8 }"
              >
                <a-time-picker
                  v-model:value="formState.microphoneRotationStartTime"
                  format="mm"
                  :showNow="false"
                ></a-time-picker>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="插队最低值" :wrapper-col="{ span: 8 }">
                <a-input
                  v-model:value="formState.queueJumpingMinmumValue"
                ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="轮麦截止时间"
                :label-col="{ span: 7 }"
                :wrapper-col="{ span: 8 }"
              >
                <a-time-picker
                  v-model:value="formState.microphoneRotationStartTime"
                  format="mm"
                  :showNow="false"
                ></a-time-picker>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="截止后不更新任务" :label-col="{ span: 10 }">
                <a-switch
                  v-model:checked="
                    formState.isNotUpdateTaskAfterDeadlineSwitchEnabled
                  " /></a-form-item
            ></a-col>
            <a-col :span="12"></a-col>
          </a-row>
        </div>

        <a-divider />
        <div>
          <a-row>
            <a-col :span="12">
              <a-form-item label="限制补排">
                <a-switch
                  v-model:checked="formState.isLimitRequeueSwitchEnabled"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item>
                <a-tooltip>
                  <template #title
                    >开启后请在群内给机器人设置为群管理员，否则不能正常使用</template
                  >
                  <span
                    class="icon-[ant-design--question-circle-filled] size-5"
                    style="color: #b02bff"
                  ></span>
                </a-tooltip>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="补排时间">
                <a-time-picker
                  v-model:value="formState.startTime"
                  format="mm"
                  :showNow="false"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="超时补排任务"
                :label-col="{ span: 7 }"
                :wrapper-col="{ span: 8 }"
              >
                <a-input
                  v-model:value="formState.queueJumpingMinmumValue"
                ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="任务取排" :wrapper-col="{ span: 8 }">
                <a-select :options="AcceptTasksAndQueueOptions"> </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12"></a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="普通取排" :wrapper-col="{ span: 8 }">
                <a-select :options="AcceptTasksAndQueueOptions"> </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12"></a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="取麦序顺延">
                <a-switch
                  v-model:checked="formState.isQueueDelaySwitchEnabled"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12"></a-col>
          </a-row>
        </div>

        <a-divider />
        <div>
          <a-row>
            <a-col :span="12">
              <a-form-item label="限制补排" :wrapper-col="{ span: 8 }">
                <a-input type="number"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="12"> </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="手速置顶人数" :wrapper-col="{ span: 8 }">
                <a-input type="number"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="手速任务值"
                :label-col="{ span: 7 }"
                :wrapper-col="{ span: 8 }"
              >
                <a-input></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="补排时间" :wrapper-col="{ span: 8 }">
                <a-time-picker
                  v-model:value="formState.startTime"
                  format="mm"
                  :showNow="false"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="超时补排任务"
                :label-col="{ span: 7 }"
                :wrapper-col="{ span: 8 }"
              >
                <a-input
                  v-model:value="formState.queueJumpingMinmumValue"
                ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12">
              <a-form-item label="随机取手速">
                <a-switch
                  v-model:checked="formState.isRandomSpeedSwitchEnabled"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12"></a-col>
          </a-row>

          <a-row>
            <a-col :span="12">
              <a-form-item label="排麦方式" :wrapper-col="{ span: 8 }">
                <a-select :options="microphoneQueueModeOptions"> </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12"></a-col>
          </a-row>
        </div>

        <!-- <a-divider />

        <a-divider /> -->

        <!-- <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item> -->

        <a-form-item :col-span="16" :wrapper-col="{ offset: 11 }">
          <a-button type="primary" html-type="submit">保存设置</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import CommonModalWrapper from "@/components/CommonModalWrapper.vue";
const open = ref(false);
const openModal = () => {
  console.log("open");
  open.value = true;
};

interface FormState {
  username: string;
  password: string;
  remember: boolean;
  // 总开关
  isMainSwitchEnabled: boolean;
  // 打指定人
  isTargetUserSwitchEnabled: boolean;
  // 发麦序@所有人
  isAtAllSwitchEnabled: boolean;
  // 轮麦序
  isRotationSwitchEnabled: boolean;
  // 仅用轮麦序
  isOnlyRotationSwitchEnabled: boolean;
  // 轮麦黑麦自动作废
  isAutoInvalidBlackMicSwitchEnabled: boolean;
  // 截止后不更新任务
  isNotUpdateTaskAfterDeadlineSwitchEnabled: boolean;
  // 限制补排
  isLimitRequeueSwitchEnabled: boolean;
  // 取麦序顺延
  isQueueDelaySwitchEnabled: boolean;
  // 随机取手速
  isRandomSpeedSwitchEnabled: boolean;
  // 其他原有字段
  startTime: string;
  microphoneRotationStartTime: string;
  queueJumpingMinmumValue: string;
  isMainEnabled: boolean;
  isTargetUserEnabled: boolean;
  // 任务设置
  taskSettings: string;
}
const formState = reactive<FormState>({
  // 总开关
  isMainSwitchEnabled: true,
  // 打指定人
  isTargetUserSwitchEnabled: true,
  // 发麦序@所有人
  isAtAllSwitchEnabled: true,
  // 轮麦序
  isRotationSwitchEnabled: true,
  // 仅用轮麦序
  isOnlyRotationSwitchEnabled: true,
  // 轮麦黑麦自动作废
  isAutoInvalidBlackMicSwitchEnabled: true,
  // 截止后不更新任务
  isNotUpdateTaskAfterDeadlineSwitchEnabled: true,
  // 限制补排
  isLimitRequeueSwitchEnabled: true,
  // 取麦序顺延
  isQueueDelaySwitchEnabled: true,
  // 随机取手速
  isRandomSpeedSwitchEnabled: true,
  // 其他原有字段
  startTime: "",
  username: "",
  password: "",
  remember: true,
  taskSettings: "",
  microphoneRotationStartTime: "",
  queueJumpingMinmumValue: "5",
  isMainEnabled: true,
  isTargetUserEnabled: true,
});
const AcceptTasksAndQueueOptions = [
  {
    label: "不可取排",
    value: 0,
  },
  {
    label: "麦序截止前",
    value: 1,
  },
  {
    label: "无限制",
    value: 2,
  },
];
const microphoneQueueModeOptions = [
  {
    label: "普通方式",
    value: 0,
  },
  {
    label: "普通防作弊方式",
    value: 1,
  },
  {
    label: "高级防作弊方式",
    value: 2,
  },
  {
    label: "自定义",
    value: 3,
  },
  {
    label: "拍一拍",
    value: 3,
  },
  {
    label: "表情包",
    value: 3,
  },
];
const queueJumpingTypeOptions = [
  {
    label: "不可插队",
    value: 0,
  },
  {
    label: "最大任务翻倍插队",
    value: 1,
  },
  {
    label: "最低任务值插队",
    value: 2,
  },
  {
    label: "没有插队",
    value: 3,
  },
];
const onFinish = (values: any) => {
  console.log("Success:", values);
  console.log(formState);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style scoped>
</style>
