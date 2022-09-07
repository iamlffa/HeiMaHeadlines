<template>
  <div class="gologin">
    <!-- <nav-bar>
      <template v-slot:left>
        <div @click="$router.back()">
            <van-icon name="arrow-left" />
        </div>
      </template>
      <template v-slot:center>
        <div>登录</div>
      </template>
    </nav-bar> -->
    <login></login>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar.vue'
import Login from '@/views/login/login.vue'
export default {
    data() {
        return {
            
        }
    },
    components: {
        NavBar,
        Login,
    }
}
</script>

<style>
.van-icon {
    color: #fff;
    font-size: 20px;
}
</style>