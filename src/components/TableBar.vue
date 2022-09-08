
<template>
  <nav>
    <ul>
      <router-link to="/film" active-class="on" tag="li">
        <i class="iconfont">&#xe8ae;</i>
        <span>电影</span>
      </router-link>
      <router-link to="/cinema" active-class="on" tag="li">
        <i class="iconfont">&#xe8c0;</i>
        <span>影院</span>
      </router-link>
      <router-link to="/information" active-class="on" tag="li">
        <i class="iconfont">&#xe62d;</i>
        <span>资讯</span>
      </router-link>
      <router-link to="/mine" active-class="on" tag="li">
        <i class="iconfont">&#xe615;</i>
        <span>我的</span>
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: white;
  text-align: center;
  z-index: 100;
  ul {
    position: relative;
    top: 50%;
    margin-top: -17px;
    display: flex;
    list-style: none;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      i {
        font-size: 18px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
.on {
  color: red;
}
</style>