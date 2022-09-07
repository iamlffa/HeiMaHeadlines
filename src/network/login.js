// 封装首页的请求
import request from "./request";
// 请求登录接口的方法
export const getLogin = (data) => {
    return request({
        method: 'POST',
        url: '/v1_0/authorizations',
        data: data,
    })
}

// 获取验证码的方法  该接口可能已经无法使用
export const sendSms = (mobile) => {
    return request({
        // es6模板字符串的写法 传入一个参数使用${}
        method: 'GET',
        url:`/v1_0/sms/codes/${mobile}`
    })
}

// 获取用户的基本资料 获取用户基本资料 包含用户发表的文章数量, 粉丝数量等等
// 需要传入用户的token 我们可以从 vuex的state里面拿
// import store from "@/store";
export const getUserInfo = () => {
    return request({
        method: 'GET',
        url: '/v1_0/user',
        // headers: {
        //     Authorization: `Bearer ${store.state.user.token}`
        // }
    })
}

// 获取首页用户的频道列表
export const getUserChannels = () => {
    return request({
        method: 'GET',
        url: '/v1_0/user/channels',
    })
}