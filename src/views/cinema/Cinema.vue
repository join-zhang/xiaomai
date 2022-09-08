<template>
  <div>
    <van-nav-bar
      title="影院"
      left-text="返回"
      @click-left="handleLeft()"
      @click-right="handleRight()"
      left-arrow
    >
      <template #left>
        {{ $store.state.cinema.cityName }}
        <van-icon name="arrow-down" size="20" />
      </template>
      <template #right>
        <van-icon name="search" size="20" />
      </template>
    </van-nav-bar>
    <div class="wrapper" :style="{ height: height }">
      <ul>
        <li v-for="cinema in dataList" :key="cinema.cinemaId">
          <div>{{ cinema.name }}</div>
          <div class="address">{{ cinema.address }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
// 引入对应组件   和字体图标
import { NavBar, Icon } from "vant";
import { mapState } from "vuex";
import BetterScroll from "better-scroll";
Vue.use(NavBar).use(Icon);

export default {
  data() {
    return {
      height: 0,
    };
  },
  methods: {
    handleLeft() {
      this.$router.push("/city");
    },
    handleRight() {
      // 点击搜索 跳转到一个search组件
      this.$router.push("/cinema/search");
    },
  },
  mounted() {
    // 判断vuex里面有没有dataList 数据  有的话 直接用 没有发请求
    if (this.$store.state.cinema.dataList.length === 0) {
      const ps = this.$store.dispatch(
        "getCinema",
        this.$store.state.cinema.cityId
      );
      ps.then(
        () => {
          // this.$nextTick(() => {
          let bs = new BetterScroll(".wrapper", {
            // movable: true,
            // zoom: true,
            scrollbar: {
              fade: true, // 滚动时候才显示滚动条
            },
          });
          // });
        },
        () => {}
      );
    } else {
      this.$nextTick(() => {
        let bs = new BetterScroll(".wrapper", {
          // movable: true,
          // zoom: true,
          scrollbar: {
            fade: true, // 滚动时候才显示滚动条
          },
        });
      });
    }

    //设置根元素的高与屏幕显示区域等高
    this.height = document.documentElement.clientHeight - 50 + "px";
  },
  computed: {
    ...mapState({
      dataList: (state) => state.cinema.dataList,
    }),
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  position: relative;
}

li {
  padding: 5px;
  .address {
    font-size: 12px;
    color: gray;
  }
}
</style>