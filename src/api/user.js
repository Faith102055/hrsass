import request from '@/utils/request'

export function login(data) {
    // 返回一个promise对象
    return request({
        url: '/sys/login',
        method: 'POST',
        data
    })


}

export function getInfo(token) {

}

export function logout() {

}
