export const Request: <D, R>(url: string, method: string, data?: D) => Promise<R> = function <D>(
  url: string,
  method: string,
  data?: D
) {
  // const navigate = useNavigate();
  let baseURL = 'https://aimarketool-fc.douwantech.com'
  return new Promise((resolve, reject) => {
    // 如果url 已经是完整的url 则不需要拼接
    if (url.includes('http')) {
      baseURL = ''
    }
    let seedUrl = baseURL + url
    method = method.toUpperCase() // 请求方式小写转换成大写
    if (method === 'GET') {
      let dataStr = '' //数据拼接字符串
      if (data) {
        Object.keys(data).forEach((key) => {
          dataStr += key + '=' + (data[key] as string) + '&'
        })
        if (dataStr !== '') {
          dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
          seedUrl = seedUrl + '?' + dataStr
        }
      }
    }

    const token = localStorage.getItem('token')
    fetch(seedUrl, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Token': token ? `${token}` : '',
        "x-user-id": '48'
      },
      mode: 'cors',
      cache: 'force-cache',
      body:
        // 如果是formdata格式的数据则不需要转json
        method === 'POST' || method === 'DELETE' || method === 'PUT' ? JSON.stringify(data) || null : null
    })
      .then((res) => {
        if (res.status !== 200) {
          if (res.status === 401) {
            localStorage.removeItem('token')
            localStorage.removeItem('userInfo')
            // window.location.reload();
          }
          reject(res)
        }
        resolve(res.json())
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export default Request
