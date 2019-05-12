import request from '@/util/request'
import api from '@/util/api';

// 获取读书会列表
const getReadingList = () => {
    return request({
        url: api + '/reading/list',
        method: 'get',
    })
}

// 获取读书会详情
const getReading = (id: any) => {
    return request({
        url: api + '/reading/get',
        method: 'get',
        params: {
            id: id,
        }
    })
}

export { getReadingList, getReading } 