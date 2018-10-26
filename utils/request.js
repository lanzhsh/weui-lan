import {api} from './api';
const app = getApp()
export const request={
  $api: {
    get(url, params) {
      return this.apiTem(url, params, "GET")
    },
    post(url, params) {
      return this.apiTem(url, params, "POST")
    },
    apiTem: function (url, params, method) {
      return new Promise(function (resolve, reject) {
        wx.request({
          url: api+url,
          method: method,
          header: {
            FR_APPID: app.globalData.extAppid || '',
            FR_OPEN_ID: app.globalData.openid || ''
          },
          data: params,
          success(res) {
            resolve(res.data)
          },
          fail(loginData) {
            reject(res)
          }
        })
      })
    }
  },
  // 获取OPENID,
}

//使用示例
//在min-demo/home/home.js文件里面有示例