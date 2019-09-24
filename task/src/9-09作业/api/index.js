import jsonp from 'jsonp'

const jsonpAjax = (url, params) => {
  return new Promise((resolve, reject) => {
    // 这里是同步的
    jsonp(
      // 设置默认url
      url || 'http://suggestion.baidu.com/su?wd=' + params,
      { param: 'cb' },
      (err, res) => {
        if (err) {
          // 异步的
          reject('您的接口出错了')
        } else {
          // 异步的
          resolve(res)
        }
      }
    )
  })
}
export default jsonpAjax
