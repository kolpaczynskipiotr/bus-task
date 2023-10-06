import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export type ApiInstance = AxiosInstance;
export type ApiResponse<T> = AxiosResponse<T>;
export type ApiConfig = AxiosRequestConfig;

export const useHTTP = (config: ApiConfig) => {
  const instance: ApiInstance = axios.create(config);

  const get = async <T>(
    url: string,
    config?: Record<string, unknown>
  ): Promise<AxiosResponse<T>> => {
    return await instance.get<T>(url, config);
  };

  const post = async <T>(
    url: string,
    data: Record<string, unknown>
  ): Promise<AxiosResponse<T>> => {
    return await instance.post<T>(url, data);
  };

  return {
    get,
    post,
  };
};
