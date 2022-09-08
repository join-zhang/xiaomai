<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in imgSrc" :key="index" class="swiper-slide">
        <img :src="item" alt="" style="width:375px" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";

export default {
  props: ["imgSrc"],
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      // 如果需要前进后退按钮
      /*     navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }, */
    });
  },
};
</script>

<style  lang="scss" scoped>
.swiper-container {
  width: 375px;
  height: 200px;
}
</style>