<template>
  <swiper :options='swiperOption' ref="swiper">
    <div class="mine-scroll-pull-down" v-if="pullDown">
      <loading ref="pullDownLoading" :text='pullDOwnText' inline/>
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="swiper-scrollbar" v-if="scrollbar"  slot="scrollbar"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Loading from 'base/loading'
import {
  PULL_DOWN_HEIGHT,
  PULL_DOWN_TEXT_INIT,
  PULL_DOWN_TEXT_START,
  PULL_DOWN_TEXT_ING,
  PULL_DOWN_TEXT_END
} from './config'
export default {
  name: '',
  props: {
    scrollbar: {
      type: Boolean,
      default: true
    },
    data: {
      type: [Array, Object]
    },
    pullDown: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      swiperOption: {
        // 垂直滚动条,一页内容能看几张内内容，自由模式，计算内容高度，是否滚动条
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        setWrapperSize: true,
        scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          hide: true
        },
        on: {
          sliderMove: this.scroll,
          touchEnd: this.touchEnd
        }
      },
      pullDOwnText: PULL_DOWN_TEXT_INIT,
      pulling: false
    }
  },
  components: {
    swiper,
    swiperSlide,
    Loading
  },
  watch: {
    data () {
      this.update()
    }
  },
  methods: {
    update () {
      this.$refs.swiper && this.$refs.swiper.swiper.update()
    },
    // 内部方法
    scroll () {
      const swiper = this.$refs.swiper.swiper
      if (this.pulling) {
        return
      }
      // 下拉超过指定高度，更改文案
      if (swiper.translate > 0) {
        if (!this.pullDown) {
          return
        }
        if (swiper.translate > PULL_DOWN_HEIGHT) {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START)
        } else {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT)
        }
      }
    },
    // 松手
    touchEnd () {
      if (this.pulling) {
        return
      }
      const swiper = this.$refs.swiper.swiper
      // 下拉
      if (swiper.translate > PULL_DOWN_HEIGHT) {
        if (!this.pullDown) {
          return
        }
        this.pulling = true
        // 禁止触摸
        swiper.allowTouchMove = false
        swiper.setTransition(swiper.params.speed)
        swiper.setTranslate(PULL_DOWN_HEIGHT)
        swiper.params.virtualTranslate = true
        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING)
        this.$emit('pull-down', this.pullDownEnd)
      }
    },
    pullDownEnd () {
      const swiper = this.$refs.swiper.swiper
      this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END)
      swiper.params.virtualTranslate = false
      swiper.allowTouchMove = true
      swiper.setTransition(swiper.params.speed)
      setTimeout(() => {
        swiper.setTranslate(0)
      }, 500)
      this.pulling = false
    }
  }
}
</script>

<style lang='scss' scoped>
  .swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    height: auto;
  }
  .mine-scroll-pull-down {
    position: absolute;
    left: 0;
    bottom: 100%;
    width: 100%;
    height: 80px;
  }
</style>
