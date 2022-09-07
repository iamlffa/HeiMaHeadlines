<template>
  <div class="mycontiner">
    <!-- 已登录的头部 -->
    <div v-if="user" class="header userinfo">
        <div class="user-base">
            <div class="user-left">
                <van-image class="img"
                    round
                    :src="userinfo.photo"
                    />
                <span class="text">欢迎</span>
            </div>
            <div class="user-right">
                <van-button type="default" round size="mini">默认按钮</van-button>
            </div>
        </div>
        <div class="user-data">
            <div class="user-data-item">
                <span class="count">{{userinfo.art_count}}</span>
                <span class="text">头条</span>
            </div>
            <div class="user-data-item">
                <span class="count">{{userinfo.follow_count}}</span>
                <span class="text">关注</span>
            </div>
            <div class="user-data-item">
                <span class="count">{{userinfo.fans_count}}</span>
                <span class="text">粉丝</span>
            </div>
            <div class="user-data-item">
                <span class="count">{{userinfo.like_count}}</span>
                <span class="text">获赞</span>
            </div>
           
        </div>
    </div>
    <!-- 未登录的头部 -->
    <div v-else class="header notlogin">
        <div class="btnlogin" @click="$router.push('/gologin')">
            <img src="@/assets/image/mobile.png" class="img">
            <span class="text">登录/注册</span>
        </div>
    </div>

    <!-- 宫格导航 -->
    <van-grid :column-num="2" class="grid">
        <van-grid-item class="grid-item" to="">
            <i slot="icon" class="iconfont iconfontshoucang"></i>
            <span slot="text">收藏</span>
        </van-grid-item>
        <van-grid-item class="grid-item" to="">
            <i slot="icon" class="iconfont iconfontlishi"></i>
            <span slot="text">历史</span>
        </van-grid-item>
    </van-grid>

    <!--  -->
    <div class="middle">
        <van-cell title="消息通知" is-link/>
        <van-cell title="小智同学" is-link/>
    </div>
    <!-- 退出登录 如在登陆状态则不显示 -->
    <van-cell v-if="user" title="退出登录" class="signoutbtn" @click="signout"/>
  </div>
</template>

<script>
// 将vuex里面的state映射进组件中
import { mapState } from 'vuex'
import { getUserInfo } from '@/network/login'
export default {
    name: 'Myprofile',
    data() {
        return {
            // 存储当前用户信息
            userinfo: {}
        }
    },
    components: {

    },
    created() {
        // 如果用户登陆了 则获取用户的信息
        if(this.user) {
            this.loadUserInfo()
        }
    },
    computed: {
        // 把vuex state中的user映射进计算属性中
        ...mapState(['user'])
    },
    methods: {
        // 退出登录
        signout: function() {
            // 给出提示弹窗 点击确定后清除 vuex 里面的token 和本地存储中的touken
            this.$dialog.confirm({
                title: '确认退出吗？'
            }).then(() => {
                // 点击确认退出时执行这里的代码  清除vuex里面的token
                // 因为 vuex 里面的token 和本地绑定 所以清除一个就行了
                this.$store.commit('getUserToken',null)
            }).catch(() => {
                // 点击取消时执行这里的代码
            })
        },

        //获取用户信息
        async loadUserInfo() {
            try {
                const { data } = await getUserInfo()
                console.log(data);
                this.userinfo = data.data
            } catch (error) {
               this.$toast('获取数据失败，请稍后重试！'); 
            }
        }
    },
}
</script>

<style lang="less">
.mycontiner {
   box-sizing: border-box; 
}
.notlogin{
    background: url('@/assets/image/banner.png');
    background-size: cover;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .btnlogin {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .img {
            height: 98px;
            width: 98px;
        }
        .text {
            margin-top: 10px;
            font-size: 20px;
            color: #fff;
        }
    } 
}
.userinfo {
    background: url('@/assets/image/banner.png');
    background-size: cover;
    height: 200px;
    .user-base {
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .user-left {
            display: flex;
            align-items: center;
            justify-content: center;
            .img {
                height: 80px;
                width: 80px;
                margin-right: 10px;
            }
            .text {
                color: #fff;
                font-size: 20px;
            }
        }
    }
    .user-data {
        height: 80px;
        display: flex;
        .user-data-item {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            flex-direction: column;
            color: #fff;
            .count {
                font-size: 20px;
            }
            .text {
                font-size: 14px;
            }
        }
    }
}
.grid {
    .grid-item {
        height: 80px;
        i.iconfont {
            font-size: 24px;
        }
        .iconfontshoucang {
            color: #eb5253;
        }
        .iconfontlishi {
            color: #ff9d1d;
        }
        span {
            font-size: 16px;
        }
    }
} 
.middle {
    margin-top: 5px;
    margin-bottom: 5px;
}
.signoutbtn {
    text-align: center;
    color: #eb5253;
}
</style>