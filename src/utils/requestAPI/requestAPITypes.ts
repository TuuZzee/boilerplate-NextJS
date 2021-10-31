/* eslint-disable no-undef */
import { AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios';

export type ClientTokenType = {
  accessToken: string;
};

export interface CommonConfigTypes {
  useAuth?: boolean;
  toastrSuccessContent?: string;
  toastrInfoContent?: string;
}

export interface CustomAxiosReqConfigTypes extends AxiosRequestConfig, CommonConfigTypes {}

export interface CustomResponse<T> extends AxiosResponse<T, any> {
  config: CustomAxiosReqConfigTypes;
}

export interface CustomInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<CustomAxiosReqConfigTypes>;
    response: AxiosInterceptorManager<CustomResponse<any>>;
  };
}
