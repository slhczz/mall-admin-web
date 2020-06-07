import request from '@/utils/request'
export function fetchList() {
  return request({
    url:'/mall-admin-cms/prefrenceArea/listAll',
    method:'get',
  })
}
