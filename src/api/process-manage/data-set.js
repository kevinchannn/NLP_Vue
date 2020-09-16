import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/process-manage/dataset/list',
    method: 'get'
    // params: query
  })
}
