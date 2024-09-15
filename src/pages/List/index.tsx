import Main from "@/components/main";
import { useEffect, useState } from "react";
import VideoItem from "./components/videoItem";
import { LoadingPrompts, NoData, VideoList } from "./style";
import { useLocation } from "react-router-dom";
import { deleteVideoApi, getVideoListApi } from "@/api/apis";
import { VideoListItem } from "@/api/type";
function Index() {
  const [videoList, setVideoList] = useState<VideoListItem[]>([]);
  const state = useLocation().state;
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const getVideoList = async (id: number) => {
    const res = await getVideoListApi({
      page,
      pageSize,
      type: "mixer_user",
      product_id: id,
    });
    if (res.code === 0) {
      setVideoList([...videoList, ...res.data.list]);
      setTotal(res.data.total);
    }
  };
  const deleteVideo = (id: number) => {
    const videoFind = videoList.find((video) => video.ID === id);
    if (videoFind) {
      const index = videoList.indexOf(videoFind);
      videoList.splice(index, 1);
      setVideoList([...videoList]);
    }
  };
  useEffect(() => {
    if (state) {
      getVideoList(state.id);
    }
  }, [page]);
  return (
    <Main
      // 到底部加载更多
      onScroll={(e) => {
        const target = e.target as HTMLDivElement;
        const scrollHeight = target.scrollHeight;
        const clientHeight = target.clientHeight;
        const scrollTop = target.scrollTop;
        if (scrollTop + clientHeight >= scrollHeight) {
          if (videoList.length < total) {
            setPage(page + 1);
          }
        }
      }}
    >
      <VideoList>
        {videoList.map((video, i) => {
          return (
            <VideoItem
              video={video}
              key={i}
              onDelete={(id) => {
                deleteVideo(id);
              }}
            />
          );
        })}
      </VideoList>
      {videoList.length ? (
        <LoadingPrompts>
          {videoList.length < total ? "加载中..." : "没有更多了"}
        </LoadingPrompts>
      ) : (
        <NoData></NoData>
      )}
    </Main>
  );
}

export default Index;
