<template>
  <div class="login">
    <nav-bar>
      <template v-slot:center>
        <div>登录</div>
      </template>
    </nav-bar>
    <!-- 通过 ref 可以获取到 Form 实例并调用实例方法 -->
    <van-form @submit="Submit" ref="formLogin">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入用户名"
        left-icon="phone-o"
        type="number"
        maxlength="11">
        <!-- <van-icon class-prefix="iconfont iconfontshouji" slot="left-icon" name="mobile"></van-icon> -->
      </van-field>
      
      <van-field 
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        left-icon="coupon-o"
        type="number"
        maxlength="6">
        <!-- <van-icon class-prefix="iconfontshouji" slot="left-icon" name="password"></van-icon> -->
        <template #button>
          <!-- 倒计时组件 isCountDownShow为true时显示倒计时 否则显示发送验证码
          @finish为vant 的事件 	倒计时结束时触发-->
          <van-count-down 
          :time="1000 * 30" 
          format="ss 秒"
          @finish="isCountDownShow = false"   
          v-if="isCountDownShow"/>
          <van-button v-else
          class="send-sms-btn" 
          size="small" 
          navtive-type="button"
          @click="Sendsms">发送验证码</van-button>
        </template>
        </van-field>
      <div style="margin: 16px;">
        <van-button block native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar.vue'
// 导入请求登陆的接口
import { getLogin,sendSms } from '@/network/login.js'
export default {
    name: 'Login',
    data() {
      return {
        user: {
          mobile:'',
          code:'246810'
        },
        isCountDownShow: false,
      }
    },
    components: {
      NavBar,
    },
    methods: {
      async Submit() {
        // 1.获取表单数据
        const user = this.user
        // 利用vant组件的弹出层 设置登陆提示
        this.$toast.loading  ({
          message: '登陆中。。。',
          forbidClick: true,    /** 禁用背景点击 */
          duration: 0   /** 设置提示的持续时间，0为一直持续  当新的loading被调用时会覆盖*/  
        })
        // 3.提交表单登录请求
        try {
          const res = await getLogin(user)
          // 把token放进 vuex 里面进行保存
          console.log(res);
          this.$store.commit('getUserToken',res.data.data)
          this.$toast.success('登陆成功！')
          // 登陆成功跳转到首页
          this.$router.push('/layout')
        } catch (error) {
          this.$toast.fail('手机号或验证码错误！')
        }
      },
      // 点击发送验证码功能
      async Sendsms () {
        // 1.校验手机号格式是否正确
        try {
          // validate	验证表单，支持传入from的name来验证单个或部分表单项 该方法会返回一个promise
          await this.$refs.formLogin.validate('mobile')
          this.$toast.success('验证成功！')
          // 将倒计时显示出来
          this.isCountDownShow = true;

          // 这里可以写获取验证码的请求的 但是接口不能用了
          try {
            // 传入请求验证码的方法
            await sendSms(this.user.mobile)
            this.$toast.success('获取成功！')
          } catch (error) {
            this.$toast.fail('获取失败！')
            // 停止计时器
            this.isCountDownShow = false;
          }
        } catch (error) {
          return this.$toast.fail('手机号或验证码错误！') 
        }
      }
    },
}
</script>

<style lang="less">
.van-form {
  margin-top: 44px;
  .van-button {
    background-color: #3296fa;
    color: #fff;
  }
  .send-sms-btn {
    height: 25px;
  }
}

</style>
