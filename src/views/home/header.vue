<template>
  <home-nav-bar class="header">
    <i class="iconfont icon-scan" slot="left"></i>
    <div slot="center">搜索框</div>
    <i class="iconfont icon-msg" slot="right"></i>
  </home-nav-bar>
</template>

<script>
import HomeNavBar from 'base/navbar'
export default {
  name: 'HomeHeader',
  components: {
    HomeNavBar
  }
}
</script>

<style lang='scss' scoped>
  @import '~assets/scss/mixins';
  .header {
    &.mine-navbar {
      background-color: transparent;
      /* background-color: $header-bgc-translucent; */
    }
    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
