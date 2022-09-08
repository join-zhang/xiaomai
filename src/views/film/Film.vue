<template>
  <div>
    <FilmSwiper :imgSrc="imgSrc"> </FilmSwiper>

    <FilmHeader></FilmHeader>
    <!-- 显示 正在热播  和即将上映的内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
import FilmSwiper from "@/views/film/FilmSwiper";
import FilmHeader from "@/views/film/FilmHeader.vue";
export default {
  components: { FilmHeader, FilmSwiper },
  data() {
    return {
      imgSrc: [
        "https://my-picture-1312629538.cos.ap-chongqing.myqcloud.com/MarkDown/xn.jpg",
        "https://my-picture-1312629538.cos.ap-chongqing.myqcloud.com/MarkDown/202207041226225.png",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>