<template>
  <div v-if="filmInfo" class="detail_content">
    <DetailHeader v-top :title="filmInfo.name"></DetailHeader>
    <div
      :style="{ backgroundImage: 'url(' + filmInfo.poster + ')' }"
      style="height: 200px; background-size: cover; background-position: center"
    ></div>
    <h3>{{ filmInfo.name }}--{{ filmInfo.filmType.name }}</h3>
    <p>{{ filmInfo.category }}</p>
    <!-- 时间是时间戳   需要过滤计算 -->
    <p>{{ filmInfo.premiereAt | dateFilter }} 上映</p>
    <p>{{ filmInfo.nation }}|{{ filmInfo.runtime }}分钟</p>
    <!-- 显示详情 -->
    <div :class="isShow ? '' : 'synopsis'">
      {{ filmInfo.synopsis }}
    </div>
    <div style="text-align: center">
      <span class="iconfont" @click="isShow = !isShow">{{
        isShow ? "&#xe601;" : "&#xe600;"
      }}</span>
    </div>
    <!-- 演员照片轮播 -->
    <DetailSwiper :perslide="4" mySwiper="actorImg">
      <div class="swiper-slide" v-for="(actor, index) in filmInfo.actors">
        <img :src="actor.avatarAddress" />
        <div style="text-align: center; font-size: 12px">
          <div>{{ actor.name }}</div>
          <div>{{ actor.role }}</div>
        </div>
      </div>
    </DetailSwiper>
    <!-- 剧照 -->
    <h3>剧照</h3>
    <detail-swiper :perslide="2" mySwiper="photoImg">
      <div
        class="swiper-slide"
        v-for="(photo, index) in filmInfo.photos"
        :key="index"
      >
        <div
          @click="handlePreview(index)"
          :style="{ backgroundImage: 'url(' + photo + ')' }"
          style="
            height: 100px;
            background-size: cover;
            background-position: center;
          "
        ></div>
      </div>
    </detail-swiper>
  </div>
</template>
<script>
import Vue from "vue";
import moment from "moment";
import { ImagePreview, Toast } from "vant";
import DetailSwiper from "@/views/detail/DetailSwiper";
import DetailHeader from "@/components/DetailHeader";
Vue.filter("dateFilter", (date) => {
  //   console.log(date);
  return moment.unix(date).format("YYYY-MM-DD");
});
// 自定义top指令
Vue.directive("top", {
  inserted(el) {
    el.style.display = "none";
    window.onscroll = () => {
      if ((document.documentElement.scrollTop || document.body.scrollTop) > 20) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    };
  },
  unbind() {
    //组件销毁时，解绑onscroll
    window.onscroll = null;
  },
});
// 使用大图
Vue.use(ImagePreview).use(Toast);
export default {
  components: { DetailSwiper, DetailHeader },
  data() {
    return {
      filmInfo: null,
      isShow: false,
    };
  },
  mounted() {
    this.getDetailData();
    this.$store.commit("CHANGGENOTSHOW");
  },
  methods: {
    async getDetailData() {
      let filmId = this.$route.query.id;
      try {
        let result = await this.$API.getDetailData(filmId);
        this.filmInfo = result.data.data.film;
      } catch (error) {
        console.log(error.message + "请求出错啦!!");
      }
    },
    handlePreview(index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index,
        closeable: true,
      });
    },
  
  },
  beforeDestroy() {
    this.$store.commit("TABBLEISSHOW");
  },
  
};
</script>
<style lang="scss" scoped>
.synopsis {
  height: 60px;
  line-height: 20px;
  overflow: hidden;
}
</style>