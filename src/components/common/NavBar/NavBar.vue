<template>
  <div class="nav-bar">
    <!-- 封装上方导航条 定义三个插槽用于复用-->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>