const developUrl = 'http://dev.cqpengshu.com:8182'// 'http://120.79.166.67:8999';//'http://192.168.0.201:8999';//'http://192.168.0.112:8999';//
// const developUrl = 'http://dev.cqpengshu.com:8182';
const productUrl = 'http://dev.cqpengshu.com:8182'// 'http://120.79.166.67:8999';//'http://dev.cqpengshu.com:8182';//http://192.168.0.201:8999';//'http://192.168.0.201:8999';//'http://dev.cqpengshu.com:8182';
const downloadUrl = 'http://dev.cqpengshu.com:8081'// 'http://120.79.166.67:8888';//'http://dev.cqpengshu.com:8081';//'http://192.168.0.201:8080';//'http://192.168.0.201:8080';
module.exports = {
  urls: process.env.NODE_ENV === 'development' ? developUrl : productUrl,
  downloadUrl: downloadUrl
}
