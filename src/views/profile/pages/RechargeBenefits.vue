<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col rounded-2xl bg-purple-500/50 p-2">
      <div class="grid grid-cols-2 p-10">
        <div class="p-2 flex flex-col gap-25">
          <div>
            <span class="text-5xl">0</span>
            <div>音符余额</div>
          </div>
          
        </div>
        <div class="p-2 flex flex-row-reverse">
          <a-button
            class="!bg-[#b02bff] !border-0 !rounded-2xl w-30 !h-12 !text-2xl hover:!bg-white"
            @click="visible = true"
            >充值</a-button
          >
        </div>
      </div>
      <span class="text-[#de82c4] pb-4">人民币充值到平台为音符1元=10音符</span>
    </div>
    <div
      class="grid grid-cols-3 rounded-2xl gap-4 p-4 bg-purple-600/30 backdrop-blur-2xl"
    >
      <BenefitsCard v-for="(item, index) in datas" :key="index">
        <template #title> {{ item.title }} </template>
        <template #price> {{ item.price }} </template>
      </BenefitsCard>
    </div>
    <RechargeModal v-model:visible="visible" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import RechargeModal from "../modals/RechargeModal.vue";
import BenefitsCard from "@/components/card/BenefitsCard.vue";
const visible = ref<boolean>(false);
const datas = [
  {
    title: "语音厅公开到首页",
    price: "100.00音符/月",
  },
  {
    title: "解锁数据汇总",
    price: "888.00音符/厅",
  },
  {
    title: "语音厅直播回放",
    price: "1999.00音符/月",
  },
  {
    title: "购买语音厅推荐位置",
    price: "5200.00音符/月",
  },
];
</script>

<style></style>
