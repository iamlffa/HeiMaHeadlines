import {token} from './index'
import { setItem,getItem } from '@/tools/Storage';
export default {
    getUserToken(state,data) {
        state.user = data
        console.log(state.user);
        // 为了防止浏览器刷新时token丢失，需要配合本地存储做持久化
        setItem(token,state.user)
    }
}