import request from '@/util/request'
import api from '@/util/api';

// 获取报名列表
const getSignList = () => {
    return request({
        url: api + '/sign/list',
        method: 'get',
    })
}

// 获取报名新增
const signAdd = (data: any) => {
    return request({
        url: api + '/sign/add',
        method: 'post',
        data: data,
    })
}

export { getSignList,signAdd } 