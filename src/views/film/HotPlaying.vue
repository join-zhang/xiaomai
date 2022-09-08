<template>
  <div class="hotPlay">
    <!-- <ul>
      <li
        v-for="film in dataList"
        :key="film.filmId"
        @click="toDetail(film.filmId)"
      >
        <img :src="film.poster" alt="" />
        <span>{{ film.name }}</span
        ><span class="filmType">{{ film.filmType.name }}</span>
        <p>观众评分:{{ film.grade ? film.grade : "0" }}</p>
        <p>主演: {{ film.actors | actorsFilter }}</p>
        <p>{{ film.nation }} | {{ film.runtime }}</p>
      </li>
    </ul> -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onload"
      :immediate-check="false"
    >
      <van-cell
        v-for="film in dataList"
        :key="film.filmId"
        @click="toDetail(film.filmId)"
      >
        <img :src="film.poster" alt="" />
        <span>{{ film.name }}</span
        ><span class="filmType">{{ film.filmType.name }}</span>
        <p>观众评分:{{ film.grade ? film.grade : "0" }}</p>
        <p>主演: {{ film.actors | actorsFilter }}</p>
        <p>{{ film.nation }} | {{ film.runtime }}</p>
      </van-cell>
    </van-list>
    <div style="height: 50px"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { List, Cell } from "vant";
Vue.use(List).use(Cell);
Vue.filter("actorsFilter", (val) => {
  if (!val) return "暂无主演";
  return val.map((item) => item.name).join(" ");
});
export default {
  data() {
    return {
      dataList: [],
      finished: false,

      loading: false,
      // 默认的当前的页数
      current: 1,
      total: 0,
    };
  },
  methods: {
    async getData() {
      let result = await this.$API.getHotPlayingData(
        this.current,
        this.$store.state.cinema.cityId
      );
      // 获取总长度
      this.total = result.data.data.total;
      if (result.status == 200) {
        this.dataList = [...this.dataList, ...result.data.data.films];
        this.loading = false;
      }
    },
    toDetail(id) {
      this.$router.push(`/detail?id=${id}`);
    },
    // 滚动条滑动到底的时候触发
    onload() {
      if (this.dataList.length >= this.total) {
        this.finished = true;
      }
      console.log("出发了");
      this.current++;
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.van-cell {
  overflow: hidden;
  padding: 10px;
  img {
    float: left;
    width: 100px;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
  }
}
</style>