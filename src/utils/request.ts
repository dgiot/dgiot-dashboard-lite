/**
 * @author keiferju
 * @time  2019-08-29 12:57
 * @title  http请求封装
 * @desc
 *
 */
 import {Interceptors} from '@/utils/interceptors';
//  import {message, Modal} from 'ant-design-vue';  // 弹吐司
//  import router from '../router';
 
 export class HttpService {
   public axios: any;
   public modal: any;
 
   constructor() {
       // 获取axios实例
     this.axios = new Interceptors().getInterceptors();
   }
 
   public getClict(obj){
     return new Promise((resolve,reject)=>{
       this.axios({
         url:obj.url,
         method:obj.method ||'GET',
         header:obj.header ||{
           'Content-type':'application/json',
           'sessionToken':localStorage.getItem('sessionToken')
         }
       }).then((res) => {
         resolve(res)
        // this.resultHandle(res, resolve);
      }).catch((err) => {
        reject(err);
      });
     })
   }
   /**
    *
    * @param res
    * @param resolve
    */
   public resultHandle(res: any, resolve) {
     if (res.status > 0) {
       resolve(res.data);
     } else {
       this.errorHandle(res);
     }
   }
 
 
   /**
    * 服务端状态处理,例如中断性异常,退出异常等等(与拦截器http握手状态注意区分,一般都能分清楚吧)
    * @param res
    */
   public errorHandle(res: any) {
     console.log(res.msg);
     
    //  message.warn(res.msg); // 统一谈服务端提示,我们提示统一由服务端提供
     // 状态码判断
     switch (res.status) {
       case -102: 
          break;
       case -152:
         break;
       default:
       // console.log(other);
     }
   }
 
 }
 
 