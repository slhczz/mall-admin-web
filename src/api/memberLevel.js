import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/mall-admin-ums/memberLevel/list',
    method:'get',
    params:params
  })
}
