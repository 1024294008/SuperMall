<template>
  <div class="tar-bar-item" @click="itemClick">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    computed: {
        isActive(){
            return this.$route.path.includes(this.path);
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor} : {};
        }
    },
    methods: {
        itemClick(){
            this.$router.replace(this.path);
        }
    }
}
</script>

<style>
  .tar-bar-item{
    text-align: center;
    display: block;
    flex: 1;
    height: 49px;
    font-size: 14px;
   }
  .tar-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
   }
</style>
