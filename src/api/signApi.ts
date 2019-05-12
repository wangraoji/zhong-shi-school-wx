import request from '@/util/request'
import api from '@/util/api';

// 获取报名列表
const getSignList = () => {
    return request({
        url: api + '/sign/list',
        method: 'get',
    })
}

export { getSignList } 