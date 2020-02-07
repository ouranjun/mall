<template>
  <swiper :options="swiperOption">
    <slot></slot>
  </swiper>
</template>

<script>
import { swiper } from 'vue-awesome-swiper'

export default {
  name: 'swiper',
  components: {
    swiper
  },
  props: {
    swiperOption: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .swiper-contain
  .swiper-slide {
    height: auto;
  }
</style>
