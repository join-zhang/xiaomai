<template>
  <div class="swiper-container" :class="mySwiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  props: {
    perslide: {
      //获取组件实例中传递的slide个数设置
      type: Number,
      default: 1,
    },
    mySwiper:{
        type:String,
        default:"actorImg"
    }
  },
  mounted() {
    //启用free模式轮播
    new Swiper("."+ this.mySwiper, {
      slidesPerView: this.perslide, //一次性显示slide的个数
      spaceBetween: 10, //每一个slide间隔的宽度
      freeMode: true,
    });
  },
};
</script>
<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>