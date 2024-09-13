import React from "react";
import {
  Title,
  VideoItemBox,
  VideoItemCaption,
  VideoItemContent,
  VideoItemContentBox,
  VideoItemContentRight,
  VideoItemDescription,
  VideoItemImg,
  VideoItemOperate,
} from "../style";

interface VideoItemProps {
  video: string;
}
function VideoItem(props: VideoItemProps) {
  return (
    <VideoItemBox>
      <Title>标题：超值福利来了！热销商品限时优惠等你来拿，惊喜不断</Title>
      <VideoItemContentBox>
        <VideoItemContent>
          <VideoItemImg src="https://img.zcool.cn/community/012bb55ede4f33a801215aa04fd218.jpg" />
          <VideoItemContentRight>
            <VideoItemDescription></VideoItemDescription>
            <VideoItemCaption></VideoItemCaption>
          </VideoItemContentRight>
        </VideoItemContent>
        <VideoItemOperate></VideoItemOperate>
      </VideoItemContentBox>
    </VideoItemBox>
  );
}

export default VideoItem;
