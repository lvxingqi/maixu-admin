<template>
  <div class="w-full min-h-[280px] bg-white/90 rounded-2xl shadow p-6 flex flex-col justify-center items-center">
    <div class="flex justify-between h-20 items-center">
      <span>优质平台推荐</span>
      <span>查看更多</span>
    </div>
    <div class="grid grid-cols-3 justify-items-stretch gap-[1vw]">
      <div v-for="n in 3" :key="n">
        <PlatformCard>
          <template #avatar>
            <!-- 后面这里的头像可以直接采用http格式加载到 -->
            <a-image :src="avatar">
              <template #previewMask
              >
              预览
            </template>
            </a-image>
          </template>
          <template #footer>
            <a href="#">
              <span>下载链接：</span>
              <span>https://ceshi.com/download.html</span>
            </a>
          </template>
          <template #QRCode>
            <img src="@/assets/platform.png" alt="图片走丢了..." />
          </template>
          <template #introduction>
            <p>
              如果苦于找不到稳定平台，找不到生态好的平台，可以选择来闪闪深度扩张。平台内部禁止恶意竞争，挖人，跳槽以及涉黄行为。深度打造平台良性生态。
            </p>
          </template>
        </PlatformCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PlatformCard from '@/components/card/PlatformCard.vue';
import avatar from '@/assets/plat-avatar.jpg';
</script>

<style></style>
