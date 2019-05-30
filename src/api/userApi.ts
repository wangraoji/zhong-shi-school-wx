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

// 注册邮箱
// http://localhost:54246//api/user/regis/regmail?mail=491127203@qq.com

const userRegmail = (data: any) => {
    return request({
        url: "http://47.111.5.41:54246/api" + '/user/regis/regmail?mail=' + data,
        method: 'post',
    })
}
export { login, singup, editPwd, editInfo, userRegmail } 