// 封装 axios 请求
import axios from "axios";
import store from "@/store";
const request = axios.create({
    baseURL: ' http://toutiao.itheima.net',
    
})
// 设置请求拦截器 统一添加 token
request.interceptors.request.use(function (config) {
    // 请求发起时经过这里
    // config 本次请求的配置对象 必须返回出去 否则请求会卡在这里
    const { user } = store.state
    if(user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`
    }
    console.log(config);
    return config
}),function(error) {
    // 如果请求出错了（还没有发出去）会进入这里
    return Promise.reject(error)
}

export default request;