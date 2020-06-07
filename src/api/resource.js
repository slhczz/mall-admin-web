import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/mall-admin-ums/resource/list',
    method: 'get',
    params: params
  })
}

export function createResource(data) {
  return request({
    url: '/mall-admin-ums/resource/create',
    method: 'post',
    data: data
  })
}

export function updateResource(id, data) {
  return request({
    url: '/mall-admin-ums/resource/update/' + id,
    method: 'post',
    data: data
  })
}

export function deleteResource(id) {
  return request({
    url: '/mall-admin-ums/resource/delete/' + id,
    method: 'post'
  })
}

export function fetchAllResourceList() {
  return request({
    url: '/mall-admin-ums/resource/listAll',
    method: 'get'
  })
}
