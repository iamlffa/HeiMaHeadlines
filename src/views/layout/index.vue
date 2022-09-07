<template>
  <div class="layout-continer">
  <!--路由出口 home video quesetion 等页面会渲染在这里  -->
  <router-view></router-view>
  <!-- 底部 tabbar 为什么不单独封装组件？ 写在这里可以把当前页面当作父路由 router-view 的地方为子路由  可以避免重复渲染底部tabbar组件
  route 开启 van组件的路由模式 可以通过 to进行跳转 -->
  <van-tabbar route class="tabbar">  
    <van-tabbar-item to="/home" class="tabbaritem">
        <i slot="icon" class="iconfont iconfontshouye"></i>
        <p>首页</p>
    </van-tabbar-item>
    <van-tabbar-item to="/question">
        <i slot="icon" class="iconfont iconfontwenda"></i>
        <p>问答</p>
    </van-tabbar-item>
    <van-tabbar-item to="/video">
        <i slot="icon" class="iconfont iconfontshipin"></i>
        <p>视频</p>
    </van-tabbar-item>
    <van-tabbar-item to="/myprofile">
        <i slot="icon" class="iconfont iconfontwode"></i>
        <p>我的</p>
    </van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
export default {
    name: 'Layout',
    data() {
        return {
            
        }
    },
}
</script>

<style>
p {
  margin: 5px;
  font-size: 14px;
}
.van-tabbar-item__text {
  text-align: center;
}
</style>