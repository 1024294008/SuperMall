<template>
  <div class="tar-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .tar-bar{
    height: 49px;
    display: flex;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgab(255, 255, 255, 0.1);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
