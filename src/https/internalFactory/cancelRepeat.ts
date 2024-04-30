import axios from 'axios'
import AxiosFactory from 'virtual-axios-factory/index.mjs'
// import { BaseConfig } from 'axios-factory/type'

// //创建一个axios实例

const service = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json'
    }
})

//通过axios-factory对service进行加工

const config: any = {
    cancelRepeat:{
        enable: true,
        // coverAll: true
        scopePorts: [
            {
                method: 'get',
                url: '/api',
                matchMode: 'fuzzy'
            },
        ]
    }
}

const axiosInstance = new AxiosFactory(service, config)

const cancelRepeat = axiosInstance.getvirtualAxios()

//最后输出axios实例

export default cancelRepeat