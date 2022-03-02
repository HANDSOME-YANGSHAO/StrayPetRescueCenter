import axios from 'axios'
// 创建axios的实例，这里采用代理就不配置baseUrl了，通过node去代理请求，绕过浏览器
const request = axios.create({
  withCredentials: true // 携带证书,后端得设置Access-Control-Allow-Origin ，Access-Control-Allow-Credentials这两个字段
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    console.log(err)
  }
)
request.interceptors.response.use(
  (res) => {
    if (res.status !== 200) {
      alert(`response.status: ${res.status}`)
    }
    return res.data
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.reload()
    }
  }
)

export default request
