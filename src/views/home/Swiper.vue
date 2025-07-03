<template>
  <div>
    <Swiper
      :modules="[Autoplay, Pagination]"
      pagination
      loop
      :space-between="50"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="(img, index) in imgs" :key="index">
        <img
          :src="img"
          alt="slide image"
          class="w-full h-[25vh] object-cover"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

const images = import.meta.glob("@/assets/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const imgs = Object.values(images);

const swiperRef = ref<any>(null);

const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
};

const onSlideChange = () => {
  console.log("Slide changed");
};
</script>
<style>
@import "swiper/css";
@import "swiper/css/navigation";
@import "swiper/css/pagination";
</style>
