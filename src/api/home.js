import { request } from './request'
import jsonp from 'assets/js/jsonp'
import { SUCC_CODE } from './config'

// 获取幻灯片数据 --ajax
export function getHomeSlider () {
  return request({
    url: '/home/slider'
  }).then(res => {
    if (res.data.code === SUCC_CODE) {
      let sliders = res.data.slider
      return sliders
    }
    throw new Error('没有成功获取到数据！')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
    return [
      {
        linkUrl: '',
        picUrl: require('assets/img/404.png')
      }
    ]
  })
}
// 获取热门推荐数据--jsonp
export const getHomeRecommend = (page = 1, psize = 20) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json'
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  }
  return jsonp(url, params, {
    param: 'callback'
  }).then(res => {
    if (res.code === '200') {
      return res
    }
    throw new Error('没有成功获取数据！')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  }).then(data => {
    return new Promise(resolve => {
      resolve(data)
    })
  })
}
