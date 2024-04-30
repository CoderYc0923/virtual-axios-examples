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
    interceptors: [
        {
            type: 'response',
            scopePorts: [
                {
                    method: 'delete',
                    url: '/api/data',
                    matchMode: 'fuzzy'
                }
            ],
            success: (response: any) => {
                console.log('response',response);
                
                console.log(`接口响应成功:${response.config.method} - ${response.config.url} 被捕获, 结果：`, response.data)
            },
            error: (error: any) => {
                console.log(`接口响应失败 被捕获`, error)
            }
        }
    ]
}

const axiosInstance = new AxiosFactory(service, config)

const scopeResponse = axiosInstance.getvirtualAxios()

//最后输出axios实例

export default scopeResponse