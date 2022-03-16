import axios from 'axios';
// import {message} from 'ant-design-vue'; // 这是我引入的antd的组件库,为了方便弹出吐司
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3 });
export class Interceptors {
  public instance: any;

  constructor() {
    // 创建axios实例
    this.instance = axios.create({ timeout: 1000 * 12 });
    axiosRetry(this.instance, { retries: 3 });
    // 初始化拦截器
    this.initInterceptors();
  }

  // 为了让http.ts中获取初始化好的axios实例
  public getInterceptors() {
    return this.instance;
  }
  // 初始化拦截器
  public initInterceptors() {
    /**
    * 请求拦截器
    * 每次请求前，如果存在token则在请求头中携带token
    */
    this.instance.interceptors.request.use(
      (config) => {
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
        // if (config.headers.isJwt) {
        // }
        const token = localStorage.getItem('sessionToken');
        // if (token) {
          config.headers['sessionToken'] = token;
        // }

        return config;
      },
      (error) => {
        console.log(error);
      },
    );


    // 响应拦截器
    this.instance.interceptors.response.use(
      // 请求成功
      (res) => {
        // if (res.headers.authorization) {
        //   localStorage.setItem('id_token', res.headers.authorization);
        // } else {
        //   if (res.data && res.data.token) {
        //     localStorage.setItem('id_token', res.data.token);
        //   }
        // }

        if (res.status === 200) {
          return Promise.resolve(res.data);
        } else {
          this.errorHandle(res);
          return Promise.reject(res.data);
        }
      },
      // 请求失败
      (error) => {
        const { response } = error;
        if (response) {
          // 请求已发出，但是不在2xx的范围
          this.errorHandle(response);
          return Promise.reject(response.data);
        } else {
          // 处理断网的情况
          // eg:请求超时或断网时，更新state的network状态
          // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
          // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
          // message.warn('网络连接异常,请稍后再试!');
        }
      });
  }


  /**
  * http握手错误
  * @param res 响应回调,根据不同响应进行不同操作
  */
  private errorHandle(res: any) {
    // 状态码判断
    switch (res.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        console.log("404 请求资源不存在");

        // message.warn('请求的资源不存在');
        break;
      default:
        console.log("连接错误");

      // message.warn('连接错误');
    }
  }
}

// index.ts
// import axios, { AxiosResponse } from 'axios'
// import type { AxiosInstance, AxiosRequestConfig } from 'axios'
// import type { RequestConfig, RequestInterceptors } from './types'
// import axiosRetry from 'axios-retry';

// axiosRetry(axios, { retries: 3 });

// export class Request {
//   // axios 实例
//   instance: AxiosInstance
//   // 拦截器对象
//   interceptorsObj?: RequestInterceptors
//   constructor(config: RequestConfig) {
//     this.instance = axios.create(config)
//     axiosRetry(this.instance, { retries: 3 });
//     this.interceptorsObj = config.interceptors
//     this.instance.interceptors.request.use(
//       (res: AxiosRequestConfig) => {
//         console.log('全局请求拦截器')
//         return res
//       },
//       (err: any) => err,
//     )

//     // 使用实例拦截器
//     this.instance.interceptors.request.use(
//       this.interceptorsObj?.requestInterceptors,
//       this.interceptorsObj?.requestInterceptorsCatch,
//     )
//     this.instance.interceptors.response.use(
//       this.interceptorsObj?.responseInterceptors,
//       this.interceptorsObj?.responseInterceptorsCatch,
//     )
//     // 全局响应拦截器保证最后执行
//     this.instance.interceptors.response.use(
//       // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
//       (res: AxiosResponse) => {
//         console.log('全局响应拦截器')
//         return res.data
//       },
//       (err: any) => err,
//     )
//   }

//   getInterceptors() {
//     return this.instance;
//   }
// }

