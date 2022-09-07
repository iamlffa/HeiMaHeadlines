<template>
  <div id="app">
    <!-- 用于跳转默认路径 即login -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    
  }
}
</script>

<style lang="less">
@import url('../src/assets/style/index.less');
@import url('../src/assets/style/iconfont.css');
</style>
