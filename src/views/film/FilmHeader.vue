<template>
  <div>
    <ul>
      <!-- 添加路由导航 -->
      <router-link to="/film/hotplaying" active-class="active" tag="li"
        >正在热搜</router-link
      >
      <router-link to="/film/willplaying" active-class="active" tag="li"
        >即将上映</router-link
      >
    </ul>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  li {
    flex: 1;
  }
}
.active {
  color: red;
  border-bottom: 2px solid red;
}
</style>