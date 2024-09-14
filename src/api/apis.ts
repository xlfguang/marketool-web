import Request from './request'
import { ChangeVideoApi, CreateLongVideoApi, CreateSegmentIdApi, GetLongVideoInfoApi, GetLongVideoListApi, GetVideoListApi, UploadVideoApi } from './type'
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
// 上传视频的接口
export const uploadVideoApi: UploadVideoApi = (params) => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    const headers: HeadersInit = {
      'X-Token': token ? `${token}` : '',
      'x-user-id': '48'
    };
    const formData = new FormData()
    formData.append('file', params.file)
    fetch(`https://aimarketool-fc.douwantech.com/api/fileUploadAndDownload/upload?video_duration=${params.video_duration}`, {
      method: 'POST',
      headers,
      body: formData
    }).then(res => {
      res.json().then(resolve).catch(reject)
    })
  })
}
// 文件分段创建ID
export const createSegmentIdApi: CreateSegmentIdApi = (params) => {
  return Request(`/api/fileUploadAndDownload/findFile`, 'GET', params)
}



// 创建长视频的接口
export const createLongVideoApi: CreateLongVideoApi = (params) => {
  return Request('/api/longShortProduct/createLongShortProduct', 'POST', params)
}
// 获取长视频最新的信息接口
export const getLongVideoInfoApi: GetLongVideoInfoApi = (params) => {
  return Request('/api/longShortProduct/findLongShortProduct', 'GET', params)
}