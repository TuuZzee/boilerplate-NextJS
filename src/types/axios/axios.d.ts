import * as axios from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    useFormData?: boolean;
    useAuth?: boolean;
    toastrSuccessContent?: string;
    toastrInfoContent?: string;
  }

  export interface AxiosResponse {
    config: AxiosRequestConfig;
  }

  export interface AxiosInstance extends Axios {
    (config: AxiosRequestConfig): AxiosPromise;
    (url: string, config?: AxiosRequestConfig): AxiosPromise;
    interceptors: {
      request: AxiosInterceptorManager<AxiosRequestConfig>;
      response: AxiosInterceptorManager<AxiosResponse<any>>;
    };
  }

  export interface AxiosStatic extends AxiosInstance {
    create(config?: AxiosRequestConfig): AxiosInstance;
  }
}
