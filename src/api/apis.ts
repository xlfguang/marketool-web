import Request from './request'
import { ChangeVideoApi, GetLongVideoListApi, GetVideoListApi } from './type'
// 获取长视频的列表接口
export const getLongVideoListApi: GetLongVideoListApi = (params) => {
  return Request('/api/longShortProduct/getLongShortProductList', 'GET', params)
}
// 获取视频的列表接口
export const getVideoListApi: GetVideoListApi = (params) => {
  return Request('/api/video/getLongShortVideoList', 'GET', params)
}
// 变更视频的接口
export const changeVideoApi: ChangeVideoApi = (params) => {
  return Request('/api/video/updateLongShortVideo', 'PUT', params)
}
// 合成视频的接口
export const synthesisVideoApi: ChangeVideoApi = (params) => {
  return Request('/api/video/updateLongShortVideo?type=concat', 'PUT', params)
}