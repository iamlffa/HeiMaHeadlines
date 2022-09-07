<template>
  <div class="HomeContiner">
    <nav-bar>
      <template v-slot:center>
        <div>
          <van-button 
          round
          size="small"
          icon="search">搜索</van-button>
        </div>
      </template>
    </nav-bar>
    <!-- 标签切换 -->
    <van-tabs v-model="active" class="middle-tabbar" animated swipeable>
      <van-tab 
      v-for="(channel, index) in userchannels" 
      :key="index"
      :title="channel.name">
      <!-- 使用子组件来渲染展示的数据  把首页请求的频道列表传入子组件中 子组件被创建时 发起对应页面的网络请求-->
      <article-list :channels="channel"></article-list>
      </van-tab>
    </van-tabs>
    <!-- 右侧横杠 -->
    <div slot="nav-right" class="right-list">
      <i class="iconfont iconfontgengduo"></i>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar.vue'
import { getUserChannels } from '@/network/login.js'
import ArticleList from './cpn/ArticleList.vue'
export default {
  data() {
    return {
      active: 0,
      userchannels: []
    }
  },
  created() {
    this.loadChannels()
  },
  components: {
    NavBar,
    ArticleList,
  },
  methods: {
    async loadChannels() {
      try {
        const { data } = await getUserChannels()
        this.userchannels = data.data.channels
      } catch (error) {
        this.$toast('获取数据失败，请稍后重试！');
      }
    }
  },
}
</script>

<style>
.van-button {
  width: 200px;
  color: #fff;
  background-color: #5babfb;
}
.middle-tabbar {
  margin-top: 44px;
}
.van-tabs__line {
  width: 20px !important;
  background-color: #3296fa !important;
}
.right-list {
  position: fixed;
  right: 0;
  top: 44px;
  background-color: #fff;
  opacity: 0.618;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 40px;
}
</style>