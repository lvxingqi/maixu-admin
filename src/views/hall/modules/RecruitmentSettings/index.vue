<template>
  <div class="h-140">
      <a-form layout="vertical" class="max-w-xl !mx-auto pl-60"
      :wrapper-col="{ span: 12 }">
        <a-form-item label="联系人">
          <a-input v-model:value="form.contact" placeholder="请输入联系人" />
        </a-form-item>
        <a-form-item label="联系方式">
          <a-input v-model:value="form.phone" placeholder="请输入联系方式" />
        </a-form-item>
        <a-form-item label="文本内容">
          <a-textarea
            v-model:value="form.content"
            placeholder="请输入招聘内容"
            :rows="4" />
        </a-form-item>
        <a-form-item label="上传图片">
          <a-upload
            v-model:file-list="form.images"
            list-type="picture-card"
            :max-count="5"
            :show-upload-list="true">
            <div>上传</div>
          </a-upload>
        </a-form-item>
        <a-form-item>
          <div class="flex items-center gap-4">
            <a-switch v-model:checked="form.publicRecruit" />
            <span>公开招聘</span>
            <span class="ml-2 text-gray-400">升级为会员可招聘，</span>
            <a class="text-blue-500 cursor-pointer" @click="goVip">去开通</a>
          </div>
        </a-form-item>
        <a-form-item>
          <div class="flex items-center gap-4">
            <a-switch v-model:checked="form.topRecruit" />
            <span>置顶招聘</span>
            <span class="ml-2 text-gray-400">付费可开通（5200 音符/厅），</span>
            <a class="text-blue-500 cursor-pointer" @click="goVip">去开通</a>
          </div>
        </a-form-item>
        <a-form-item class="flex justify-center">
          <a-button type="primary">保存设置</a-button>
        </a-form-item>
      </a-form>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const form = ref({
  contact: '',
  phone: '',
  content: '',
  images: [],
  publicRecruit: false,
  topRecruit: false,
});

function goVip() {
  router.push({ path: '/profile/pages/VipBenefits' });
}
</script>

<style scoped></style>
