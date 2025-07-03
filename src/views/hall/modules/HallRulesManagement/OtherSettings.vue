<template>
  <div class="bg-white/30 rounded-2xl px-4 py-2">
    <div></div>
    <a-divider orientation="left"> 其他设置 </a-divider>
    <a-form
      :model="formState"
      name="otherSettings"
      autocomplete="off"
      @finish="onFinish"
      :labelCol="{ span: 8 }"
      :wrapperCol="{ span: 8 }">
      <a-row>
        <a-col :span="12">
          <a-form-item label="任务联排" name="taskLink">
            <a-switch v-model:checked="formState.taskLink" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="手速连排" name="speedLink">
            <a-switch v-model:checked="formState.speedLink" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="任务累计" name="taskSum">
            <a-switch v-model:checked="formState.taskSum" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="新闻推送" name="newsPush">
            <a-switch v-model:checked="formState.newsPush" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-divider />
      <a-row>
        <a-col :span="12">
          <a-form-item label="买8" name="buy8">
            <a-switch v-model:checked="formState.buy8" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row justify="space-between">
        <a-col :span="12">
          <a-form-item label="截止时间" name="stopTime8">
            <a-time-picker
              v-model:value="formState.stopTime8"
              format="mm"
              :showNow="false" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="任务最低值" name="taskMinmumValue8" >
            <a-input v-model:value="formState.taskMinmumValue8" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="买9" name="buy9">
            <a-switch v-model:checked="formState.buy9" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row justify="space-between">
        <a-col :span="12">
          <a-form-item label="截止时间" name="stopTime9">
            <a-time-picker
              v-model:value="formState.stopTime9"
              format="mm"
              :showNow="false" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="任务最低值" name="taskMinmumValue9">
            <a-input v-model:value="formState.taskMinmumValue9"/>
          </a-form-item>
        </a-col>
      </a-row>
      <a-divider />
      <a-row>
        <a-col :span="12">
          <a-form-item label="是否可以代排麦" name="canProxyQueue">
            <a-switch v-model:checked="formState.canProxyQueue" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="是否可以转麦序" name="canTransferQueue">
            <a-switch v-model:checked="formState.canTransferQueue" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-divider />
      <a-row>
        <a-col :span="12">
          <a-form-item label="报备回厅" name="reportBack">
            <a-switch v-model:checked="formState.reportBack" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row justify="space-between">
        <a-col :span="12">
          <a-form-item label="回厅时间" name="backTime">
            <a-time-picker
              v-model:value="formState.backTime"
              format="mm"
              :showNow="false" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="同时报备人数" name="reportPeople">
            <a-input
              v-model:value="formState.reportPeople"
              type="number"/>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="每人限制次数" name="limitTimes">
            <a-input
              v-model:value="formState.limitTimes"
              type="number" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="报备未归提醒词" name="reportNotBackTip" :wrapperCol="{ span: 24 }">
            <a-textarea v-model:value="formState.reportNotBackTip" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-divider />
      <a-row>
        <a-col :span="12">
          <a-form-item label="每档汇总" name="summaryPerLevel">
            <a-switch v-model:checked="formState.summaryPerLevel" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="每日汇总" name="summaryPerDay">
            <a-switch v-model:checked="formState.summaryPerDay" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="自动打卡" name="autoCheckin">
            <a-switch v-model:checked="formState.autoCheckin" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item>
            <a-tooltip>
              <template #title>文字格式的打开表</template>
              <span
                class="icon-[ant-design--question-circle-filled] size-5"
                style="color: #b02bff"></span>
            </a-tooltip>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="显示所有统计项" name="showAllStats">
            <a-switch v-model:checked="formState.showAllStats" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item>
            <a-tooltip>
              <template #title>没有数据也会显示</template>
              <span
                class="icon-[ant-design--question-circle-filled] size-5"
                style="color: #b02bff"></span>
            </a-tooltip>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row justify="space-around">
        <a-col :span="12">
          <a-descriptions :column="1" :colon="false" title="公告">
            <a-descriptions-item label="厅号❤ID：">{{
              formState.hallNumber
            }}</a-descriptions-item>
            <a-descriptions-item
              v-for="(item, index) in formState.announcementText.split('\n')"
              :key="index"
              :label="index + 1 + '.'"
              >{{ item }}</a-descriptions-item
            >
          </a-descriptions>
        </a-col>
        <a-col :span="3">
          <div
            class="rounded-xl bg-pink-200 text-center py-2 cursor-pointer"
            @click="openAnnouncementModal">
            编辑公告
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="是否开启进群提醒" name="joinGroupNotice">
            <a-switch v-model:checked="formState.joinGroupNotice" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="进群欢迎词" name="welcomeMsg">
            <a-textarea v-model:value="formState.welcomeMsg" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="退群提醒" name="leaveGroupNotice">
            <a-switch v-model:checked="formState.leaveGroupNotice" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row justify="center">
        <a-col :span="4"></a-col>
        <a-col :span="4">
          <a-form-item>
            <a-button type="primary" html-type="submit" class="!bg-sky-300" @click.prevent="onFinish(formState)"
              >保存设置</a-button
            >
          </a-form-item>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>
    </a-form>
    <a-modal
      v-model:open="showAnnouncementModal"
      title="编辑公告"
      :footer="null">
      <a-textarea
        v-model:value="announcementDraft"
        :rows="8"
        placeholder="请输入公告内容，每行一条" />
      <div class="flex justify-end mt-4">
        <a-button type="primary" @click="saveAnnouncement">保存</a-button>
        <a-button class="ml-2" @click="showAnnouncementModal = false"
          >取消</a-button
        >
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
const formState = reactive({
  // 任务联排开关
  taskLink: true,
  // 手速连排开关
  speedLink: true,
  // 任务累计开关
  taskSum: true,
  // 新闻推送开关
  newsPush: true,
  // 买8开关
  buy8: true,
  // 买8截止时间
  stopTime8: "",
  // 买8任务最低值
  taskMinmumValue8: "",
  // 买9开关
  buy9: true,
  // 买9截止时间
  stopTime9: "",
  // 买9任务最低值
  taskMinmumValue9: "",
  // 是否可以代排麦开关
  canProxyQueue: true,
  // 是否可以转麦序开关
  canTransferQueue: true,
  // 报备回厅开关
  reportBack: true,
  // 回厅时间
  backTime: "",
  // 同时报备人数
  reportPeople: 0,
  // 每人限制次数
  limitTimes: 0,
  // 报备未归提醒词
  reportNotBackTip: "",
  // 每档汇总开关
  summaryPerLevel: true,
  // 每日汇总开关
  summaryPerDay: true,
  // 自动打卡开关
  autoCheckin: true,
  // 显示所有统计项开关
  showAllStats: true,
  // 公告厅号
  hallNumber: "273315",
  // 公告内容（多行字符串）
  announcementText: `禁止黑麦\n麦克风清晰\n尊重主持和老板\n接活速度不要墨迹\n提前进厅超3分钟不上麦罚款`,
  // 是否开启进群提醒开关
  joinGroupNotice: true,
  // 进群欢迎词
  welcomeMsg: "",
  // 退群提醒开关
  leaveGroupNotice: true,
});
const onFinish = (values: any) => {
  console.log("表单提交:", values);
  console.log(formState);
};
// 公告编辑弹窗相关
const showAnnouncementModal = ref(false);
const announcementDraft = ref(formState.announcementText);
const openAnnouncementModal = () => {
  announcementDraft.value = formState.announcementText;
  showAnnouncementModal.value = true;
};
const saveAnnouncement = () => {
  formState.announcementText = announcementDraft.value;
  showAnnouncementModal.value = false;
};
</script>

<style></style>
