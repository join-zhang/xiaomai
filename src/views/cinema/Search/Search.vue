<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

    <van-list>
      <!-- <van-cell v-for="cinema in $store.state.dataList" :key="cinema.cinemaId"> -->
      <!-- 数据使用vue的计算属性进行过滤搜索  -->
      <van-cell v-for="cinema in computedDataList" :key="cinema.id">
        <div>{{ cinema.name }}</div>
        <div class="address">{{ cinema.address }}</div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import Vue from "vue";
import { Search, Cell, List } from "vant";

Vue.use(Search).use(List).use(Cell);
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      this.$router.back()
    },
  },
  mounted() {
    // 用户刷新会没有数据 判断是否有数据
    // 进入时候  隐藏tableBar
    this.$store.commit("CHANGGENOTSHOW");
    // 如果没有 则根据当前的仓库的cityId请求数据
    //
    if (this.$store.state.cinema.dataList.length == 0) {
      this.$store.dispatch("getCinema", this.$store.state.cinema.cityId);
    }
  },
  computed: {
    computedDataList() {
      const dataList = this.$store.state.cinema.dataList;
      if (!this.value) return [];
      return dataList.filter((item) => {
        //可以使用includes

        // 使用正则
        const reg = new RegExp(this.value, "i");
        return reg.test(item.name) || reg.test(item.address);
      });
      // return dataList.filter(item =>{
      //   return
      // })
    },
  },
  beforeDestroy() {
    this.$store.commit("TABBLEISSHOW");
  },
};
</script>

<style>
</style>