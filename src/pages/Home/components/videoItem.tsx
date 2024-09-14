import styled from "styled-components";
import { LongVideoListItem } from "@/api/type";
import { useNavigate } from "react-router-dom";

import splitvideoGif from "@/assets/images/gif/splitvideo.gif";
import longshortsubtitleGif from "@/assets/images/gif/longshortsubtitle.gif";
import splitcontentGif from "@/assets/images/gif/splitcontent.gif";
import contentIcon from "@/assets/images/gif/content.gif";
import concatIcon from "@/assets/images/gif/concat.png";
import failIcon from "@/assets/images/gif/fail.png";
import concatDoneIcon from "@/assets/images/gif/concat_done.png";
import waitIcon from "@/assets/images/gif/wait.png";
import { createLongVideoApi, getLongVideoInfoApi } from "@/api/apis";

const VideoItemBox = styled.div`
  width: 176px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const VideoItemCover = styled.div<{
  cover?: string;
  isDisabled: boolean;
}>`
  width: 176px;
  height: 312px;
  border-radius: 10px;
  background: ${(props) => (props.cover ? `url(${props.cover})` : "#ffffff")};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
`;
const VideoItemTitle = styled.div`
  font-size: 14px;
  height: 36px;
  font-weight: 400;
  /* 超出两行隐藏 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
  text-align: left;
  color: #130808;
`;
const VideoItemStatus = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* 渐变 */
`;
const VideoItemStatusIcon = styled.img`
  width: 152px;
  height: 130px;
`;
const VideoItemStatusText = styled.div`
  width: 88px;
  height: 33px;
  border-radius: 6px;
  background: #ff5334;
  border: none;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 33px;
  cursor: pointer;
`;
const videoStatus = new Map([
  ["-1", failIcon],
  ["0", waitIcon],
  ["1", splitvideoGif],
  ["2", splitvideoGif],
  ["3", longshortsubtitleGif],
  ["4", splitcontentGif],
  ["5", contentIcon],
  ["6", concatIcon],
  ["7", concatDoneIcon],
  ["wait", waitIcon],
]);

function VideoItem(props: {
  videoInfo: LongVideoListItem;
  getList: () => void;
}) {
  const navigate = useNavigate();
  const goListPage = () => {
    if (props.videoInfo.status !== "7") return;
    // 跳转到视频页
    navigate("/list", {
      state: {
        id: props.videoInfo.ID,
      },
    });
  };
  // 开始拆分
  const startSplit = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const latestInfoRes = await getLongVideoInfoApi({
      ID: props.videoInfo.ID,
    });
    if (latestInfoRes.code !== 0) return;
    const latestInfo = latestInfoRes.data;
    const res = await createLongVideoApi({
      ...latestInfo,
    });
    if (res.code === 0) {
      props.getList();
    }
  };

  return (
    <VideoItemBox>
      <VideoItemCover
        cover={
          props.videoInfo.status === "7" ? props.videoInfo.cover_url : undefined
        }
        isDisabled={props.videoInfo.status !== "7"}
        onClick={goListPage}
      >
        {props.videoInfo.status !== "7" && (
          <VideoItemStatus>
            <VideoItemStatusIcon
              src={videoStatus.get(props.videoInfo.status)}
            />
            {props.videoInfo.status === "wait" ? (
              <VideoItemStatusText onClick={startSplit}>
                开始拆分
              </VideoItemStatusText>
            ) : null}
          </VideoItemStatus>
        )}
      </VideoItemCover>
      <VideoItemTitle>{props.videoInfo.title}</VideoItemTitle>
    </VideoItemBox>
  );
}

export default VideoItem;
