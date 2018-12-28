import axios from 'axios'

const service = axios.create({
    baseURL: 'https://easy-mock.com/mock/5bffa895a3983c0ca0d85898/testurl',
    timeout: 5000
})

//拦截request
service.interceptors.request.use(
    config => {
        //处理请求头
        // if (store.getters.token) {
        //     config.headers['X-Token'] = sessionStorage.getItem('token') // 让每个请求携带自定义token 请根据实际情况自行修改
        // }
        //config.headers['X-Token'] = 'teng520'
        return config
    },
    error => {
        console.log('error' ,error)
        Promise.reject(error)
    }
)

//拦截response
service.interceptors.response.use(
    response => {
        const res = response.data

        if(res.code !== 200){
            //
            return Promise.reject('error')
        }else{
            return response.data
        }
    },
    error => {
        console.log('error' ,error)
        return Promise.reject(error)
    }
)

export default service