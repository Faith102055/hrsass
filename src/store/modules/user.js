import { getToken, setToken, removeToken } from "@/utils/auth"
import { login } from "@/api/user"
const state = {
  // 状态
  // 初始化的时候从缓存中读取状态，并复制到初始化状态上
  // vuex的持久化，如何实现？vuex和前端缓存相结合
  token: getToken()//设置tonken初始化状态  token持久化=>放到缓存

}
const mutations = {
  setToken(state, token) {
    state.token = token

    //把此时的token值再传入到 setToken中，更新token的值
    //  token持久化=>放到缓存
    setToken(token)

  },
  removeToken(state) {
    state.token = null//删除vuex的token
    removeToken()//先清除vuex 再清除缓存vuex 和缓存数据同步
  }
}
// 执行异步操作
const actions = {
  // 定义login action 也需要参数，调用action时，传递过来参数
  async login(context, data) {
    const result = await login(data)//实际上是一个promise result就是执行的结果
    // axions默认给数据加了一层data
    // if (result.data.success) {

    // }

    // actions 修改state 必须通过mutations
    context.commit('setToken', result)

  }

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

