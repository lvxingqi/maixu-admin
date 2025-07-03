<script setup lang="ts">
import Footer from "./views/layout/Footer.vue";
import Header from "./views/layout/Header.vue";
import Main from "./views/layout/Main.vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

</script>

<template>
  <a-config-provider :locale="zhCN">
    <div
      class="min-h-screen flex flex-col bg-gradient-to-br from-emerald-300 via-amber-200 to-fuchsia-300 text-black">
      <Header />
      <main class="flex-1 pt-24">
        <Main />
      </main>
      <footer class="fixed bottom-0 w-full bg-purple-950">
        <Footer />
      </footer>
    </div>
  </a-config-provider>
</template>

<style scoped>
/* main 区域顶部/底部内边距与 header/footer 高度一致，避免内容被遮挡 */
</style>
