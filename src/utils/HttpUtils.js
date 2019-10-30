import * as axios from 'axios'
import cfg from '../config/app'
// import qs from 'qs'

export class HttpUtils {
  // get请求
  static get (url, param, hearders) {
    return this.http('GET', url, param, hearders)
  }

  // post请求
  static post (url, param, hearders) {
    return this.http('POST', url, param, hearders)
  }

  static http (type, url, param = {}, headers = {}) {
    url = cfg.urls + url
    headers['Content-Type'] = 'application/json;charset=UTF-8'
    const user = JSON.parse(window.sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).user : null
    if (user && user.personToken) {
      url = url + '?token=' + user.personToken
    }
    // 响应拦截
    axios.interceptors.response.use(function (response) {
      // console.log(response)
      // 登录超时或者未登录
      if (response.data.code === 401) {
        // storejs.remove('userInfo');
        // location.reload(true);
        // window.location.href='/login';
      } else if (response.data.code === 1345) {
        // store.dispatch('changeTokenStatus', 0)
      } else if (response.data.code === 1346) {
        /* window.location.href='/login'; */
      }
      return response
    }, function (error) {
      return Promise.reject(error)
    })

    return axios({
      method: type,
      url: url,
      params: type === 'GET' ? param : '',
      data: param,
      headers: headers,
      async: true
    })
  }
}
