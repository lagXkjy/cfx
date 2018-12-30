import axios from 'axios'

// axios.defaults.withCredentials = true
const service = axios.create({
    baseURL: 'https://cx.shhuiya.com/CefuApi',
    withCredentials: false,
    crossDomain: true
    //timeout: 5000
})

//拦截request
service.interceptors.request.use(
    config => {
        //处理请求头
        // if (store.getters.token) {
        //     config.headers['X-Token'] = sessionStorage.getItem('token') // 让每个请求携带自定义token 请根据实际情况自行修改
        // }
        //config.headers['X-Token'] = 'teng520'
        config.headers['content-type'] = 'application/json;charset=UTF8'
        config.headers['Access-Control-Allow-Origin'] = '*'
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

        if(res.res == false && res.errtype == 4){
            //
            //return Promise.reject('error')
            alert('失效')
            location.href = 'http://cx.shhuiya.com/CefuApi/BindUserPage'
        }else{
            return response.data
        }
        return response.data
    },
    error => {
        console.log('error' ,error)
        return Promise.reject(error)
    }
)

export default service