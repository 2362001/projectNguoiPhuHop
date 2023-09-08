import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import config from './config'

const fetchHandler = axios.create(config.api)

// Request interceptor
fetchHandler.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    return request
  },
  (error: AxiosResponse) => {
    return Promise.reject(error)
  }
)

const downloadHandler = axios.create(config.api)
// Request interceptor
downloadHandler.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    return request
  },
  (error: AxiosResponse) => {
    return Promise.reject(error)
  }
)

export { downloadHandler }
export default fetchHandler
