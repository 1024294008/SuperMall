<template>
  <div>
    <router-view/>
    <main-tar-bar/>
  </div>
</template>

<script>
import MainTarBar from 'components/content/mainTarBar/MainTarBar'

export default {
  components: {
    MainTarBar
  }
}
</script>

<style scoped>
  @import 'assets/css/base.css'
</style>
