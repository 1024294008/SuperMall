<template>
  <tar-bar>
      <tar-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tarbar/home.svg">
        <img slot="item-icon-active" src="~assets/img/tarbar/home_active.svg">
        <div slot="item-text">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tarbar/category.svg">
        <img slot="item-icon-active" src="~assets/img/tarbar/category_active.svg">
        <div slot="item-text">分类</div>
      </tar-bar-item>
      <tar-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tarbar/shopcart.svg">
        <img slot="item-icon-active" src="~assets/img/tarbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </tar-bar-item>
      <tar-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tarbar/profile.svg">
        <img slot="item-icon-active" src="~assets/img/tarbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </tar-bar-item>
    </tar-bar>
</template>

<script>
import {TarBar, TarBarItem} from 'components/common/tarbar'

export default {
  components: {
    TarBar,
    TarBarItem,
  }
}
</script>

<style>

</style>
