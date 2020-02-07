<template>
  <div class="home">
    <!-- 头部导航栏 -->
    <header class="g-header-container">
      <home-header></home-header>
    </header>
    <!-- 滚动条 -->
    <scroll :data='recommends' pullDown @pull-down='pullToRefresh'>
    <!-- swiper轮播图 -->
    <div>
      <home-swiper ref="slider" />
    </div>
    <!-- 导航 -->
    <Nav-item />
    <!-- 推荐热卖 -->
    <home-recommend @loaded='getRecommends'/>
    </scroll>
    <div class="g-backtop-container"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeSwiper from './homeSwiper'
import HomeRecommend from './recommend'
import NavItem from './navItem'
import Scroll from 'base/scroll'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeRecommend,
    NavItem,
    Scroll
  },
  data () {
    return {
      recommends: []
    }
  },
  methods: {
    updateScroll () {

    },
    getRecommends (recommends) {
      this.recommends = recommends
    },
    pullToRefresh (end) {
      this.$refs.slider.updata().then(end)
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '~assets/scss/mixins';
  .home {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
</style>
