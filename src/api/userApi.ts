import request from '@/util/request'
import api from '@/util/api';

// 用户登录
const login = (data: any) => {
    return request({
        url: api + '/user/login',
        method: 'post',
        data: data
    })
}

// 用户注册
const singup = (data: any) => {
    return request({
        url: api + '/user/reg',
        method: 'post',
        data: data
    })
}

// 修改资料
const editInfo = (data: any) => {
    return request({
        url: api + 'user/edit',
        method: 'post',
        data: data
    })
}

// 修改密码
const editPwd = (data: any) => {
    return request({
        url: api + '/user/repwd',
        method: 'post',
        data: data
    })
}


export { login, singup, editPwd, editInfo } 