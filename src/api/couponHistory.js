import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/mall-admin-sms/couponHistory/list',
    method:'get',
    params:params
  })
}
