<template>
  <div class="flex flex-col gap-4">
    <Swiper />
    <PlatformRecommend />
    <QualityTunerRecommend />
    <DesignerRecommend />
  </div>
</template>

<script lang="ts" setup>
import PlatformRecommend from "./PlatformRecommend.vue";
import Swiper from "./Swiper.vue";
import QualityTunerRecommend from "./QualityTunerRecommend.vue";
import DesignerRecommend from "./DesignerRecommend.vue";
</script>
<style></style>
