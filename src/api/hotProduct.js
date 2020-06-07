import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/mall-admin-sms/home/recommendProduct/list',
    method:'get',
    params:params
  })
}

export function updateRecommendStatus(data) {
  return request({
    url:'/mall-admin-sms/home/recommendProduct/update/recommendStatus',
    method:'post',
    data:data
  })
}

export function deleteHotProduct(data) {
  return request({
    url:'/mall-admin-sms/home/recommendProduct/delete',
    method:'post',
    data:data
  })
}

export function createHotProduct(data) {
  return request({
    url:'/mall-admin-sms/home/recommendProduct/create',
    method:'post',
    data:data
  })
}

export function updateHotProductSort(params) {
  return request({
    url:'/mall-admin-sms/home/recommendProduct/update/sort/'+params.id,
    method:'post',
    params:params
  })
}
