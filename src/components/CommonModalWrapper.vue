<!-- 这个文件是为了统一全局弹窗的css样式 -->
<template>
  <div ref="commonModalWrapperRef">
    <slot :modalWrapper />
  </div>
</template>

<script lang="ts" setup>
import { useTemplateRef } from "vue";

const modalWrapper = useTemplateRef("commonModalWrapperRef");
</script>

<style scoped>
:deep(.ant-modal-header) {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90deg, rgba(165,180,252,0.85) 0%, rgba(99,102,241,0.85) 100%);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: #2d1a4a;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px 0 rgba(99,102,241,3);
}

:deep(.ant-modal-content) {
  background: linear-gradient(135deg, rgba(165,180,252,0.1) 0%, rgba(67,56,202,0.3) 100%);
  padding: 32px 28px 24px 28px;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(67,56,202,0.18);
  border: 2px solid #a5b4fc;
  backdrop-filter: blur(10px);
}

:deep(.ant-modal-footer) {
  display: flex;
  justify-content: space-around;
  background: transparent;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: none;
}

:deep(.ant-modal-close) {
  color: #6366f1 !important;
  font-size: 1.3rem;
  top: 18px;
  right: 18px;
}
</style>
