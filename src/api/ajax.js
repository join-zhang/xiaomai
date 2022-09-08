import axios from 'axios'
// 引入加载动画  
import { Toast } from 'vant'
const requests = axios.create({
  baseURL: 'https://m.maizuo.com',
  headers: {
    'X-Client-Info':
      '{"a":"3000","ch":"1002","v":"5.2.1","e":"16619281951404153658081281","bc":"130600"}'
  }
})

requests.interceptors.request.use(
  (config) => {
    // 发送请求前 加载动画
    Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true, // 背景禁止点击
      message: '加载中' // 提示信息
    })
    return config
  },
  (error) => {
    return Promise.reject(new Error('failed'))
  }
)

requests.interceptors.response.use(
  (config) => {
    // 请求响应前, 清除动画
    Toast.clear()
    return config
  },
  (error) => {
    return Promise.reject(new Error('failed'))
  }
)

export default requests
