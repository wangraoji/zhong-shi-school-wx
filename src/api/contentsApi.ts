import request from '@/util/request'
import api from '@/util/api';

// 获取内容列表
const getContentsList = () => {
    return request({
        url: api + '/contents/list',
        method: 'get',
    })
}

// 获取内容详情
const getContents = (id: any) => {
    return request({
        url: api + '/contents/get',
        method: 'get',
        params: {
            id: id,
        }
    })
} 

export { getContentsList, getContents } 