<template>
  <van-index-bar
    :index-list="indexList"
    highlight-color="blue"
    @select="handleSelect"
  >
    <div v-for="(cities, index) in citiesList" :key="cities.type">
      <van-index-anchor :index="cities.type" />
      <van-cell
        :title="city.name"
        v-for="(city, index) in cities.list"
        :key="city.cityId"
        @click="handleClick(city.cityId, city.name)"
      />
    </div>
  </van-index-bar>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell, Toast } from "vant";

Vue.use(IndexBar).use(Cell).use(Toast);
Vue.use(IndexAnchor);
export default {
  data() {
    return {
      citiesList: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        let result = await this.$API.getCinemaAddressData();
        this.citiesList = this.formatData(result.data.data.cities);
      } catch (error) {}
    },
    handleSelect(index) {
      Toast.setDefaultOptions({ duration: 1000 });
      Toast(index);
    },
    formatData(list) {
      //获取a - z的字母,并排列存在一个数组中
      // 应该返回的数据格式
      // [
      //     {
      //         type:"A",
      //         list:[{},{}]
      //     },
      //     {
      //         type:"B",
      //         list:[{},{}]
      //     },
      // ]

      // 首先获取所有字母 根据 A 到 Z生成一个数组
      const arr = [];
      for (let index = 65; index < 91; index++) {
        arr.push(String.fromCharCode(index));
      }

      const dataList = [];
      arr.forEach((item) => {
        const newArr = list.filter((obj) => {
          return obj.pinyin[0].toUpperCase() === item;
        });
        if (newArr.length > 0) {
          dataList.push({
            type: item,
            list: newArr,
          });
        }
      });
      return dataList;
    },
    handleClick(cityId, cityName) {
      // 每次点击切换的时候 清空cinema 仓库中的dataList 数据
      this.$store.commit("CLEARDATALIST")
      this.$store.commit("UPDATACITYNAME", { cityId, cityName });
      this.$router.back();
    },
  },
  computed: {
    indexList() {
      return this.citiesList.map((item) => item.type);
    },
  },
};
</script>

<style>
</style>