import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { useStore } from 'vuex'

export class ServiceApi {
  private readonly axiosInstance: AxiosInstance
  private readonly getAccessToken: () => string | null | undefined
  constructor(baseUrl: string, getAccessToken: () => string | null | undefined) {
    this.getAccessToken = getAccessToken
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    })
    this.setupInterceptor(this.axiosInstance)
  }

  private setupInterceptor(instance: AxiosInstance) {
    instance.interceptors.request.use(
      (config) => {
        const accessToken = this.getAccessToken()
        config.headers['Authorization'] = `Bearer ${accessToken}`
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
    instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }

  public get<ResponseType>(url: string, config: AxiosRequestConfig = {}) {
    return this.axiosInstance.get<ResponseType>(url, config)
  }

  public post<ResponseType, RequestType = never>(
    url: string,
    data: RequestType,
    config: AxiosRequestConfig = {},
  ) {
    return this.axiosInstance.post<ResponseType>(url, data, config)
  }

  public put<ResponseType, RequestType = never>(
    url: string,
    data: RequestType,
    config: AxiosRequestConfig = {},
  ) {
    return this.axiosInstance.put<ResponseType>(url, data, config)
  }

  public delete<ResponseType>(url: string, config: AxiosRequestConfig = {}) {
    return this.axiosInstance.delete<ResponseType>(url, config)
  }

  public patch<ResponseType, RequestType = never>(
    url: string,
    data: RequestType,
    config: AxiosRequestConfig = {},
  ) {
    return this.axiosInstance.patch<ResponseType>(url, data, config)
  }
}
