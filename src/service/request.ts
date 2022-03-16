import axios from 'axios';
import axiosRetry from 'axios-retry';
axiosRetry(axios, { retries: 3 });
import { BASE_URL, TIMEOUT} from './config';

const instance = axios.create({
    baseURL:BASE_URL,
    timeout:TIMEOUT
})
axiosRetry(instance, { retries: 3 });

//添加拦截
instance.interceptors.request.use(config => {
    config.headers['Content-type'] = 'application/json'
    let token = localStorage.getItem('sessionToken') ||''
    if(token){
      config.headers['sessionToken'] = token
    }
    return config
},error => {

})

instance.interceptors.response.use(res => {
    
    return res.data
},error => {
    return error;
})




export default instance;
