import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'https://lianghj.top:8888/api/private/v1',
    timeout: 5000
  })

  instance.interceptors.request.use(
    (config) => {
      if (window.sessionStorage.getItem('token')) {
        config.headers.Authorization = window.sessionStorage.getItem('token')
      }
      return config
    },
    (err) => {
      console.log(err)
    }
  )

  instance.interceptors.response.use(
    (res) => {
      return res.data
    },
    (err) => {
      console.log(err)
    }
  )
  return instance(config)
}
