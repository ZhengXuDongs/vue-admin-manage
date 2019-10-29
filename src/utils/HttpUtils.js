import * as axios from 'axios'
import cfg from '../config/app'

export class HttpUtils {
  // get请求
  static get(url, param, hearders) {
    return this.http('GET', url, param, hearders)
  }

  // post请求
  static post(url, param, hearders) {
    return this.http('POST', url, param, hearders)
  }

  static http(type, url, param = {}, headers = {}) {
    url = cfg.urls + url
    headers['Content-Type'] = 'application/json;charset=UTF-8'
    const token = window.sessionStorage.getItem('token')
    headers['Authorization'] = token ? 'Bearer ' + token : ''

    // 响应拦截
    axios.interceptors.response.use(function(response) {
      // console.log(response)
      // 登录超时或者未登录
      if (response.data.code === 401) {
        // storejs.remove('userInfo');
        // location.reload(true);
        // window.location.href='/login';
      } else if (response.data.code === 1345) {
        // store.dispatch('changeTokenStatus', 0)
      } else if (response.data.code === 1346) {
        /* window.location.href='/login';*/
      }
      return response
    }, function(error) {
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
