export type GetLongVideoListApiParams = {
  page: number
  pageSize: number
}
export type LongVideoListItem = {
  CreatedAt: string
  ID: number
  UpdatedAt: string
  back_colour: string
  border_color: string
  brandId: number
  cover_url: string
  create_type: string
  font_color: string
  font_size: number
  line_space: number
  mainVideo: string
  main_duration: number
  margin_v: number
  outline_colour: string
  primary_colour: string
  status: string
  subtitle_font_size: number
  title: string
  userId: number
  y_align: number
}
export type GetLongVideoListApiData = {
  list: LongVideoListItem[]
  page: number
  pageSize: number
  total: number
}
export type GetLongVideoListApiResult = {
  code: number
  data: GetLongVideoListApiData
  msg: string
}
export type GetLongVideoListApi = (params: GetLongVideoListApiParams) => Promise<GetLongVideoListApiResult>


export type GetVideoListApiParams = {
  page: number
  pageSize: number
  type: 'mixer_user'
  product_id: number
}

export type VideoListItem = {
  CreatedAt: string
  ID: number
  UpdatedAt: string
  brandId: number
  channelname: string
  concat_status: string
  cover_url: string
  description: string
  duration: number
  ids: null
  is_refresh: boolean
  outputUrl: string
  posterId: number
  productId: number
  send_id: number
  send_user_names: string[]
  sort: number
  splitVideoId: number
  srtUrl: string
  subtitle: string
  tag: string
  title: string
  update_type: string
  userId: number
  videoUrl: string
}
export type GetVideoListApiData = {
  list: VideoListItem[]
  page: number
  pageSize: number
  total: number
}
export type GetVideoListApiResult = {
  code: number
  data: GetVideoListApiData
  msg: string
}
export type GetVideoListApi = (params: GetVideoListApiParams) => Promise<GetVideoListApiResult>

export type ChangeVideoApiParams = VideoListItem
export type ChangeVideoApiResult = {
  code: number
  data: null
  msg: string
}
export type ChangeVideoApi = (params: ChangeVideoApiParams) => Promise<ChangeVideoApiResult>

export type UploadVideoApiParams = {
  file: File
}
export type UploadVideoApiData = {
  file: {
    CreatedAt: string
    ID: number
    UpdatedAt: string
    brand_id: number
    duration: number
    key: string
    name: string
    tag: string
    url: string
    user_id: number
  }
}
export type UploadVideoApiResult = {
  code: number
  data: UploadVideoApiData
  msg: string
}
export type UploadVideoApi = (params: UploadVideoApiParams) => Promise<UploadVideoApiResult>

export type CreateLongVideoApiParams = {
  back_colour: string
  border_color: string
  cover_url: string
  create_type: string
  font_color: string
  font_size: number
  line_space: number
  mainVideo: string
  main_video_ratio: number
  margin_v: number
  outline_colour: string
  primary_colour: string
  segment_duration: number
  status: string
  subtitle_font_size: number
  title: string
  y_align: number
}

export type CreateLongVideoApiResult = {
  code: number
  data: null
  msg: string
}
export type CreateLongVideoApi = (params: CreateLongVideoApiParams) => Promise<CreateLongVideoApiResult>