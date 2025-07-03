<template>
  <div>
    <a-modal
      v-model:open="visible"
      title="充值音符"
      autocomplete="off"
      @ok="visible = false"
      class="flex justify-center !w-180"
    >
      <div class="flex flex-col">
        <div class="grid grid-cols-4 gap-10 group">
          <div
            :class="[
              'size-30',
              'border',
              selected == index ? 'bg-[#681096]/10' : 'bg-gradient-to-br from bg-[#760dac] to-purple-300','rounded-2xl'
            ]"
            v-for="(_color, index) in colors"
            :key="index"
            @click="selected = index"
          >
            500音符 ￥50
          </div>
          <div class="size-30 border bg-gradient-to-br from bg-[#760dac] to-purple-400 rounded-2xl">自定义</div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// import { useTemplateRef } from "vue";

// const container = useTemplateRef("container");
const visible = defineModel("visible");
const selected = ref(-1);
const colors = ["red", "green", "blue"];
</script>

<style></style>
