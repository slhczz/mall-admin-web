import request from '@/utils/request'
export function fetchList() {
  return request({
    url:'/mall-admin-oms/companyAddress/list',
    method:'get'
  })
}
