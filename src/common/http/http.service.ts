import { Inject } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import { AXIOS_INSTANCE_TOKEN } from './http.constants';

export class HttpService {
  constructor(
    @Inject(AXIOS_INSTANCE_TOKEN)
    private readonly instance: AxiosInstance,
  ) {}
  get<T = any>(
    url: string,
    config?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T, any>> {
    return this.instance.get<T>(url, config);
  }
  delete<T = any>(
    url: string,
    config?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T, any>> {
    return this.instance.delete<T>(url, config);
  }
  head<T = any>(
    url: string,
    config?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T, any>> {
    return this.instance.head<T>(url, config);
  }
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T, any>> {
    return this.instance.post<T>(url, data, config);
  }
  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T, any>> {
    return this.instance.put<T>(url, data, config);
  }
  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T, any>> {
    return this.instance.patch<T>(url, data, config);
  }
  get axiosRef(): AxiosInstance {
    return this.instance;
  }
}
