import Request from './request'
import { ChangeVideoApi, CreateLongVideoApi, CreateSegmentIdApi, DeleteSegmentCacheApi, DeleteVideoApi, GetLongVideoInfoApi, GetLongVideoListApi, GetVideoListApi, UploadSegmentApi, UploadSegmentCompleteApi, UploadVideoApi } from './type'
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

// 切片上传的接口
export const uploadSegmentApi: UploadSegmentApi = (params) => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    const headers: HeadersInit = {
      'X-Token': token ? `${token}` : '',
      'x-user-id': '48'
    };
    const formData = new FormData()
    formData.append('file', params.file)
    formData.append('chunkNumber', `${params.chunkNumber}`)
    formData.append('fileName', params.fileName)
    formData.append('chunkTotal', `${params.chunkTotal}`)
    formData.append('fileMd5', params.fileMd5)
    formData.append('chunkMd5', params.chunkMd5)
    fetch(`https://aimarketool-fc.douwantech.com/api/fileUploadAndDownload/breakpointContinue`, {
      method: 'POST',
      headers,
      body: formData
    }).then(res => {
      res.json().then(resolve).catch(reject)
    })
  })
}

// 分段上传完成的接口
export const uploadSegmentCompleteApi: UploadSegmentCompleteApi = (params) => {
  return Request(`/api/fileUploadAndDownload/breakpointContinueFinish?fileName=${params.fileName}&fileMd5=${params.fileMd5}&videoDuration=${params.videoDuration}`, 'POST', params)
}
// 分段上传删除缓存的接口
export const deleteSegmentCacheApi: DeleteSegmentCacheApi = (params) => {
  return Request(`/api/fileUploadAndDownload/removeChunk`, 'POST', params)
}

// 创建长视频的接口
export const createLongVideoApi: CreateLongVideoApi = (params) => {
  return Request('/api/longShortProduct/createLongShortProduct', 'POST', params)
}
// 获取长视频最新的信息接口
export const getLongVideoInfoApi: GetLongVideoInfoApi = (params) => {
  return Request('/api/longShortProduct/findLongShortProduct', 'GET', params)
}
// 删除视频的接口
export const deleteVideoApi: DeleteVideoApi = (params) => {
  return Request(`/api/video/deleteLongShortVideo?ID=6052`, 'DELETE', params)
}