import { createStore } from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions';
import modules from './modules';
import { setItem,getItem } from '@/tools/Storage';
// 这里存放共享的数据
export const token = 'Token_KEY'
const state = {
  // 存放token配合本地存储实现持久化
  user: getItem(token)
}
export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
})
