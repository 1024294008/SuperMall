<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  flex-flow: row nowrap;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend-item{
  flex: 1 1 0;
  text-align: center;
}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
