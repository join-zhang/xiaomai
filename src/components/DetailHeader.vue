<template>
  <div @click="$router.back()">
    {{ title }}
  </div>
</template>
<script>
export default {
  props: ["title"],
  methods: {
    back() {
      console.log("触发了");
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: white;
}
</style>