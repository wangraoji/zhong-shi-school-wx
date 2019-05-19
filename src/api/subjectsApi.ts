import request from '@/util/request'
import api from '@/util/api';

// 获取课程列表
const getSubjectsList = () => {
    return request({
        url: api + '/subjects/list',
        method: 'get',
    })
}

// 获取课程详情
const getSubjects = (id: any) => {
    return request({
        url: api + '/subjects/get',
        method: 'get',
        params: {
            id: id,
        }
    })
}


export { getSubjectsList, getSubjects } 