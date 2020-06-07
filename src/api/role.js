import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/mall-admin-ums/role/list',
    method: 'get',
    params: params
  })
}

export function createRole(data) {
  return request({
    url: '/mall-admin-ums/role/create',
    method: 'post',
    data: data
  })
}

export function updateRole(id, data) {
  return request({
    url: '/mall-admin-ums/role/update/' + id,
    method: 'post',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/mall-admin-ums/role/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function deleteRole(data) {
  return request({
    url:'/mall-admin-ums/role/delete',
    method:'post',
    data:data
  })
}

export function fetchAllRoleList() {
  return request({
    url: '/mall-admin-ums/role/listAll',
    method: 'get'
  })
}

export function listMenuByRole(roleId) {
  return request({
    url: '/mall-admin-ums/role/listMenu/'+roleId,
    method: 'get'
  })
}

export function listResourceByRole(roleId) {
  return request({
    url: '/mall-admin-ums/role/listResource/'+roleId,
    method: 'get'
  })
}

export function allocMenu(data) {
  return request({
    url: '/mall-admin-ums/role/allocMenu',
    method: 'post',
    data:data
  })
}

export function allocResource(data) {
  return request({
    url: '/mall-admin-ums/role/allocResource',
    method: 'post',
    data:data
  })
}
