<template>
  <div class="nav" v-if="navItem.length">
    <div class="nav-item" v-for="(item,index) in navItem" :key="index">
      <a class="nav-item-link" :href="item.linkURL">
        <img :src="item.imgURL">
        <span>{{item.name}}</span>
      </a>
    </div>
  </div>
</template>

<script>
import { navItem } from './config'
export default {
  name: 'navItem',
  created () {
    this.navItem = navItem
  }
}
</script>

<style lang='scss' scoped>
  .nav {
    width: 100%;
    padding: 15px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    &-item {
      width: 20%;
      margin-bottom: 10px;
      &-link img{
        width: 70%;
        margin-bottom: 5px;
      }
      &-link span{
        display: block;
      }
    }
  }

</style>
