import request from '@/utils/request'
export function policy() {
  return request({
    url:'/mall-storage/aliyun/oss/policy',
    method:'get',
  })
}
