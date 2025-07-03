<template>
      <div class="h-130">
        <a-descriptions title="用户信息" :column="1">
        <template #extra>
          <span class="icon-[ant-design--edit-outlined] bg-purple-900 !ml-5" @click="showUser=true"></span>
        </template>
        <a-descriptions-item label="昵称">{{ userInfo.nickname }}</a-descriptions-item>
        <a-descriptions-item label="手机号"
          >{{ userInfo.phone }}
          <span class="icon-[ant-design--edit-outlined] bg-purple-900 !ml-5" @click="showPhone=true"></span>
        </a-descriptions-item>
        <a-descriptions-item label="头像" class="relative"
          ><img
            :src="userInfo.avatar"
            alt="头像走丢了"
            class="size-10 rounded-full absolute -top-1"
        ></img></a-descriptions-item>
        <a-descriptions-item label="性别">{{ sexMap[userInfo.sex] }}</a-descriptions-item>
        <a-descriptions-item label="绑定微信"> {{ userInfo.wx }} </a-descriptions-item>
        <a-descriptions-item label="绑定微信wxid">
          {{ userInfo.wxid }}
        </a-descriptions-item>
      </a-descriptions>

      <UpdateUserInfoModal v-model:visible="showUser" :user="userInfo"/>
      <UpdatePhoneModal v-model:visible="showPhone"/>
      </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import UpdateUserInfoModal from "../modals/UpdateUserInfoModal.vue";
import UpdatePhoneModal from "../modals/UpdatePhoneModal.vue";

const showUser = ref<boolean>(false)
const showPhone = ref<boolean>(false)


const sexMap = ref({
  0: "未知",
  1: "男",
  2: "女",
});
const userInfo = reactive<UserInfo>({
  nickname: "hh",
  phone: "233",
  avatar: "/src/assets/a.jpg",
  sex: 1,
  wx: "hhh",
  wxid: "666",
});



</script>

<style></style>
