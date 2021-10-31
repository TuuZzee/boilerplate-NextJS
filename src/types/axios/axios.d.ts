import * as axios from 'axios'

declare module 'axios' {
  export interface AxiosResponse<any>  {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    config: AxiosRequestConfig<T>;
    request?: any;
  }
}
 