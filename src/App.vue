<template>
  <div class="main">
    <TableBar v-show="$store.state.tableBar.isShow"></TableBar>
    <!-- 显示路由切换的组件页面 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 引入底部组件
import TableBar from "@/components/TableBar.vue";

export default {
  components: { TableBar },
};

</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  overflow: auto;
}
</style>