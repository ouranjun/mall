import axios from 'axios'
import { TIMEOUT } from './config'
export function request (config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://www.imooc.com/api',
    timeout: TIMEOUT
  })
  // 2.axios的拦截器
  // 2.1请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  // 2.2响应拦截的作用
  instance.interceptors.response.use(res => {
    return res
  }, err => {
    console.log(err)
  })
  // 3.发送真正的网络请求
  return instance(config)
}
