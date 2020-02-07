<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
    <router-view/>
    </div>
    <div class="g-footer-container">
    <tab-bar/>
    </div>
  </div>
</template>

<script>
import TabBar from 'common/tabbar'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>
