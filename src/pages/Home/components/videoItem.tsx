import styled from "styled-components";
import { LongVideoListItem } from "@/api/type";
import { useNavigate } from "react-router-dom";
const VideoItemBox = styled.div`
  width: 176px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const VideoItemCover = styled.div<{
  cover: string;
}>`
  width: 176px;
  height: 312px;
  border-radius: 10px;
  background: url(${(props) => props.cover}) no-repeat;
  background-size: cover;
  position: relative;
  cursor: pointer;
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

function VideoItem(props: { videoInfo: LongVideoListItem }) {
  const navigate = useNavigate();
  const goListPage = () => {
    // 跳转到视频页
    navigate("/list", {
      state: {
        id: props.videoInfo.ID,
      },
    });
  };
  return (
    <VideoItemBox>
      <VideoItemCover
        cover={props.videoInfo.cover_url}
        onClick={goListPage}
      ></VideoItemCover>
      <VideoItemTitle>{props.videoInfo.title}</VideoItemTitle>
    </VideoItemBox>
  );
}

export default VideoItem;
