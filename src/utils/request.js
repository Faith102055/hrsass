import { Message } from "element-ui"


import axions from "axions"
const service = axions.create({
    // 当执行 npm run dev =>.evn.development=>跨域代理

    baseUrl: process.env.VUE_APP_BASE_API,
    //npm run dev =>api   npm run build =>/prod-api
    // 设置超时时间
    timeout: 5000
})
service.interceptors.request.use()
// 响应拦截器
service.interceptors.response.use(response => {
    // axions默认加一层data
    const { success, message, data } = response.data
    // 要根据成功与否决定下面的操作
    if (success) {
        return data
    } else {
        // 业务已经错误，还能进then？不能 因该进catch
        message.error(message)//提示错误信息
        return Promise.reject(new Error(message))
    }
}, error => {
    Message.error(error.message)//提示错误信息
    return Promise.reject(error)
})
export default service
