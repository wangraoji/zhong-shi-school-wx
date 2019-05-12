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
const getSubjects = (int: any) => {
    return request({
        url: api + '/subjects/list',
        method: 'get',
        params: {
            int: int,
        }
    })
}


export { getSubjectsList, getSubjects } 