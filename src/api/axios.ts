import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';
import {StorageHelper} from '../helpers';

export const axiosInstance = axios.create({
  // baseURL: 'http://localhost:3000/api/',
  baseURL: 'https://streamily.herokuapp.com/api/',
});
const ResponseInterceptor = (response: AxiosResponse) => {
  return response;
};
const RequestInterceptor = async (config: AxiosRequestConfig) => {
  const accessToken = await StorageHelper.getItem(
    StorageHelper.StorageKeys.Access_Token,
  );

  config.headers.Authorization = 'Bearer ' + accessToken;
  return config;
};
axiosInstance.interceptors.request.use(RequestInterceptor);
axiosInstance.interceptors.response.use(ResponseInterceptor, async (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    console.log('error', error);
    return;
  } else {
    if (error.response.status === 401) {
      await StorageHelper.removeItem(StorageHelper.StorageKeys.Access_Token);
      await StorageHelper.removeItem(StorageHelper.StorageKeys.USER_ID);
    }
    return Promise.reject(error);
  }
});
