<template>
  <div>
    <div class="flex items-start gap-x-8">
      <!-- 左侧菜单栏 -->
      <a-menu
        mode="vertical"
        class="!bg-purple-700 !border-0 h-45 rounded-xl w-56"
        :selectedKeys="current"
        @click="handleClick"
      >
        <a-menu-item v-for="item in menuList" :key="item.key">{{ item.label }}</a-menu-item>
      </a-menu>

      <!-- 右侧内容区 -->
      <div
        class="profile-content !bg-purple-700/10 backdrop-blur-3xl !px-10 !py-20 rounded-2xl overflow-auto flex-1 max-w-4xl min-w-[300px] h-180"
      >
        <!-- 子页面内容会渲染到这里 -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

// 菜单项配置，便于维护和扩展
const menuList = [
  { key: "base", label: "个人主页" },
  { key: "rechargeBenefits", label: "充值权益" },
  { key: "vipBenefits", label: "会员权益" },
  { key: "myInvitation", label: "我的邀请" },
];

const router = useRouter();
const route = useRoute();

// 当前选中的菜单项 key
const current = ref<string[]>([menuList[0].key]);

// 监听路由变化，自动切换菜单选中项
watch(
  () => route.name,
  (name) => {
    if (typeof name === 'string' && menuList.some(item => item.key === name)) {
      current.value = [name as string];
    }
  },
  { immediate: true }
);

// 监听 query.first，兼容外部跳转
watch(
  () => route.query,
  (val) => {
    if (val.first === "1") {
      current.value = ["base"];
    }
  }
);

// 菜单点击事件，路由跳转
const handleClick = (e: any) => {
  router.push({ name: e.key });
};
</script>

<style scoped>
:deep(.ant-menu-title-content) {
  text-align: center;
  padding-left: 0;
  width: 100%;
  display: block;
}
</style>
