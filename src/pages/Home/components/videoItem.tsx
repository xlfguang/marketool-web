import styled from "styled-components";
import playIcon from "@/assets/images/play-icon.png";
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
const PlayIcon = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;
`;
function VideoItem(props: {
  videoInfo: {
    title: string;
    link: string;
  };
}) {
  return (
    <VideoItemBox>
      <VideoItemCover cover={props.videoInfo.link}>
        <PlayIcon src={playIcon} alt="play" />
      </VideoItemCover>
      <VideoItemTitle>{props.videoInfo.title}</VideoItemTitle>
    </VideoItemBox>
  );
}

export default VideoItem;
