<template>
  <div
    class="flex flex-col  px-4 py-2 rounded-2xl overflow-auto"
  >
    <div>
      <MicrophoneOrderSettings/>
      <a-divider />
      <PinnedCardSettings />
      <a-divider />
      <ReportStatisticsSettings />
      <a-divider />
      <OtherSettings />
    </div>
  </div>
</template>

<script lang="ts" setup>
import PinnedCardSettings from "./PinnedCardSettings.vue";
import ReportStatisticsSettings from "./ReportStatisticsSettings.vue";
import OtherSettings from "./OtherSettings.vue";
import MicrophoneOrderSettings from "./MicrophoneOrderSettings.vue";
</script>

<style></style>
