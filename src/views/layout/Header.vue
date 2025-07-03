<template>
  <div>
    <!-- 外层仅做背景和定位 -->
    <div
      class="fixed w-full left-0 top-0 z-50 bg-gradient-to-br via-amber-200 from-fuchsia-300 to-emerald-300">
      <!-- 居中内容容器 -->
      <div
        class="flex items-center justify-between h-20 max-w-7xl !mx-auto px-8 min-w-0">
        <div class="flex items-center gap-12 min-w-0">
          <img src="@/assets/logo.png" class="h-14 w-14 object-contain" />
          <RouterLink to="/">首页</RouterLink>
          <RouterLink to="/hallmanage">语音厅管理</RouterLink>
        </div>
        <div class="flex items-center gap-12 min-w-0">
          <div class="relative group">
            <button class="text-lg px-6 py-3 cursor-pointer">关注我们</button>
            <div
              class="absolute hidden group-hover:block top-7 left-1/2 -translate-x-1/2">
              <div
                class="border border-l-8 border-r-8 border-b-8 border-transparent border-b-purple-400 w-0 h-0 mx-auto"></div>
              <img src="@/assets/c.jpg" alt="" class="w-32 h-32 object-cover" />
            </div>
          </div>

          <button
            v-if="!isLogined"
            @click="show"
            class="text-lg px-6 py-3 rounded-md text-white bg-gradient-to-r from-blue-700 to-pink-500">
            登录
          </button>
          <div v-if="isLogined" class="group relative">
            <img
              src="@/assets/b.jpg"
              alt=""
              class="h-10 w-10 rounded-full cursor-pointer object-cover" />
            <ul
              class="absolute translate-y-[7px] hidden group-hover:block transition-all duration-300 opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 mt-2 bg-purple-400 shadow rounded w-40 z-50">
              <div
                class="absolute top-[-8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-purple-400"></div>
              <li
                class="px-4 py-2 hover:bg-purple-700 !m-0"
                @click="router.push({ name: 'base', query: { first: 1 } })">
                个人主页
              </li>
              <li class="px-4 py-2 hover:bg-purple-700 !m-0" @click="logout">
                退出登录
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <LoginModal v-model:visible="visible" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LoginModal from "../auth/LoginModal.vue";
import { useRouter } from "vue-router";

const show = () => {
  visible.value = true;
};
const isLogined = ref<boolean>(false);
const visible = ref<boolean>(false);

const router = useRouter();

const logout = () => {
  isLogined.value = false;
  router.push("/");
};
</script>

<style scoped>
/* 可根据需要补充自定义样式 */
</style>
