import { request } from './axios'

/**
 * @description -封装User类型的接口方法
 */


interface PageParams {
    pageNum: number,
    pageSize: number,
    username: string,
    remark: string,
    mobile: string
}
export class AccoutListService {       // 模块一
    
    static async list(params: PageParams) {   // 接口一
        return request('/api/accountbooks/accountbook/list',params, 'post')
    }
    static async login2(params: object) {   // 接口二
        return request('/login',params, 'post')
    }
    static async login3(params: object) {   // 接口三
        return request('/login',params, 'post')
    }
}

export class landRelevant {     // 模块二
    /**
     * @description 获取地列表
     * @return {HttpResponse} result
     */
    static async landList(params: object) {
        return request('/land_list_info',params, 'get')
    }
}
