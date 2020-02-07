<template>
  <div>
    <loading class="loading" v-if="!sliders.length"></loading>
    <swiper v-else class="home-swiper" :options='swiperOption' :key="keyId">
      <swiper-slide class="home-swiper-item" v-for='(item, index) in sliders' :key="index">
        <a :href="item.linkUrl">
        <img :src="item.picUrl">
        </a>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// import HomeSwiper from 'base/swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getHomeSlider } from 'api/home.js'
import Loading from 'base/loading'

export default {
  name: 'HomeSwiper',
  data () {
    return {
      keyId: Math.random(),
      swiperOption: {
        watchOverflow: true,
        speed: 300,
        direction: 'horizontal',
        loop: true,
        autoplay: { disableOnInteraction: false },
        interval: 0,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      sliders: []
    }
  },
  components: {
    swiper,
    swiperSlide,
    Loading
  },
  created () {
    this.getSliders()
  },
  methods: {
    updata () {
      return this.getSliders()
    },
    getSliders () {
      return getHomeSlider().then(data => {
        this.sliders = data
        this.keyId = Math.random()
      })
    }
  }
}

</script>

<style lang='scss' scoped>
  .loading{
  height: 200px;
  }
  .home-swiper {
    width: 100%;
    height: 100%;
    &-item {
      height: 200px;
      width: 100%;
    }
    &-item img {
      width: 100%;
      height: 100%;
    }
  }
</style>
