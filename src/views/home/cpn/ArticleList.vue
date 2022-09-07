<template>
  <div class="article-list">
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
        <van-cell v-for="(article, index) in list" :key="index" :title="article.title" />
    </van-list>
  </div>
</template>

<script>
import { getArticles } from '@/network/articles'
export default {
    name: 'ArticleList',
    data() {
        return {
            list: [],       /** 存储 */
            loading: false,
            finished: false,
            timestamp: null  /** 更新获取下一页的时间戳 */
        }
    },
    props: {
        channels: {
            type: Object,
            required: true,
        }
    },
    methods: {
        // 1.初始化或者滚动到底部的时候会触发此函数
        // 2.异步更新数据
        async onLoad() {
            try {
                const {data} = await getArticles({
                    channel_id: this.channels.id,             /** 频道id 用于获取当前频道的数据 */
                    timestamp: this.timestamp || Date.now()   /** 时间戳 类似于页码  下拉时接口会返回一个新的 */
                })
                const results = data.data.results
                // ... js的展开语法 用于数组或对象解构
                this.list.push(...results)
                // 3.加载状态结束 不显示加载中的信息了
                this.loading = false
                // 4.判断数据是否全部加载完成 如果全部加载完成 则展示没有更多了
                if(results.length) {
                    // 更新获取下一页的时间戳
                    this.timestamp = data.data.pre_timestamp
                }else {
                    // 没有数据了 不显示加载更多
                    this.finished = true
                }
            } catch (error) {
                this.$toast('获取数据失败，请稍后重试！');
            }
            
        }
    },
}      
</script>

<style>

</style>