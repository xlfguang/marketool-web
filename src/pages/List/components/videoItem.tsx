import React, { useState } from "react";
import {
  Caption,
  Cover,
  Introduce,
  Line,
  MyInput,
  MyTextArea,
  OperateButtonBox,
  OperateButtonImg,
  ParametersForm,
  ParametersFormBottom,
  ParametersFormButton,
  ParametersFormButtonBox,
  ParametersFormCheck,
  ParametersFormCheckBox,
  ParametersFormCheckLabel,
  ParametersInputBox,
  ParametersInputTitle,
  PlayIcon,
  Title,
  VideoItemBox,
  VideoItemCaption,
  VideoItemContent,
  VideoItemContentBox,
  VideoItemContentRight,
  VideoItemDescription,
  VideoItemImg,
  VideoItemImgBox,
  VideoItemOperate,
} from "../style";
import downloadIcon from "@/assets/images/Download.png";
import synthesisIcon from "@/assets/images/synthesis.png";
import alterIcon from "@/assets/images/alter.png";
import deleteIcon from "@/assets/images/delete.png";
import playIcon from "@/assets/images/play-icon.png";
import { VideoListItem } from "@/api/type";
import { changeVideoApi, synthesisVideoApi } from "@/api/apis";

interface VideoItemProps {
  video: VideoListItem;
}
const OperateButton = (props: {
  icon: string;
  onClick: () => void;
  btnText: string;
  active?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <OperateButtonBox onClick={props.onClick} active={props.active}>
      <OperateButtonImg src={props.icon} alt="" />
      {props.btnText}
      {props.children}
    </OperateButtonBox>
  );
};

const ParametersInput = (props: {
  title: string;
  type: "input" | "textarea";
  value: string;
  onInput: (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => void;
  disabled?: boolean;
}) => {
  return (
    <ParametersInputBox>
      <ParametersInputTitle>{props.title}</ParametersInputTitle>
      {props.type === "input" ? (
        <MyInput
          type="text"
          value={props.value}
          onInput={props.onInput}
          disabled={props.disabled}
        />
      ) : (
        <MyTextArea
          value={props.value}
          onInput={props.onInput}
          disabled={props.disabled}
        />
      )}
    </ParametersInputBox>
  );
};
function VideoItem(props: VideoItemProps) {
  const [formShow, setFormShow] = useState(false);
  const [activeBtn, setActiveBtn] = useState("");
  const video = props.video;

  const [title, setTitle] = useState(video.title);
  const [subtitle, setSubtitle] = useState(video.subtitle);
  const [description, setDescription] = useState(video.description);
  const [tag, setTag] = useState(video.tag);
  const download = async () => {
    const response = await fetch(video.videoUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch video: ${response.statusText}`);
    }
    const blob = await response.blob(); // 获取视频文件的blob数据
    const url = window.URL.createObjectURL(blob); // 创建本地URL
    const link = document.createElement("a");
    link.href = url;
    link.download = `${video.title}.mp4`; // 指定下载文件名
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url); // 释放URL
  };
  const synthesis = async () => {
    const res = await synthesisVideoApi({
      ...video,
      title: title,
      subtitle: subtitle,
      description: description,
      tag: tag,
    });
    if (res.code === 0) {
      setFormShow(false);
    } else {
      alert(res.msg);
    }
  };
  const alter = () => {
    setFormShow(true);
    setActiveBtn("alter");
  };
  const deleteVideo = () => {};

  const save = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const res = await changeVideoApi({
      ...video,
      title: title,
      subtitle: subtitle,
      description: description,
      tag: tag,
    });
    if (res.code === 0) {
      setFormShow(false);
    } else {
      alert(res.msg);
    }
  };
  const cloneForm = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setFormShow(false);
  };

  return (
    <VideoItemBox>
      <Title>标题：超值福利来了！热销商品限时优惠等你来拿，惊喜不断</Title>
      <VideoItemContentBox>
        <VideoItemContent>
          <VideoItemImgBox>
            <VideoItemImg src={video.cover_url} />
            <PlayIcon src={playIcon} />
          </VideoItemImgBox>
          <VideoItemContentRight>
            <Introduce>
              <VideoItemDescription>
                描述：{video.description || "暂无描述"}
              </VideoItemDescription>
              <VideoItemCaption>
                标签：{video.tag || "暂无标签"}
              </VideoItemCaption>
            </Introduce>
            <Line />
            <Caption>字幕：{video.subtitle || "暂无字幕"}</Caption>
          </VideoItemContentRight>
          {formShow && (
            <Cover
              onClick={() => {
                setFormShow(false);
                setActiveBtn("");
              }}
            ></Cover>
          )}
        </VideoItemContent>
        <VideoItemOperate>
          <OperateButton
            icon={downloadIcon}
            onClick={download}
            btnText="下载"
          />
          <OperateButton
            icon={synthesisIcon}
            onClick={synthesis}
            btnText="合成"
            active={activeBtn === "synthesis"}
          />
          <OperateButton
            icon={alterIcon}
            onClick={alter}
            btnText="变更"
            active={activeBtn === "alter"}
          >
            {formShow && (
              <ParametersForm>
                <ParametersInput
                  title="标题"
                  type="input"
                  value={title}
                  onInput={(e) => {
                    setTitle((e.target as HTMLInputElement).value);
                  }}
                />
                <ParametersInput
                  title="字幕"
                  type="textarea"
                  value={subtitle}
                  onInput={(e) =>
                    setSubtitle((e.target as HTMLInputElement).value)
                  }
                />
                <ParametersInput
                  title="社交媒体描述"
                  type="input"
                  value={description}
                  onInput={(e) =>
                    setDescription((e.target as HTMLInputElement).value)
                  }
                />
                <ParametersInput
                  title="社交媒体标签"
                  type="input"
                  value={tag}
                  onInput={(e) => setTag((e.target as HTMLInputElement).value)}
                />
                <ParametersFormBottom>
                  <ParametersFormCheckBox>
                    <ParametersFormCheck type="checkbox" />
                    <ParametersFormCheckLabel>
                      是否同步更新到社交媒体
                    </ParametersFormCheckLabel>
                  </ParametersFormCheckBox>
                  <ParametersFormButtonBox>
                    <ParametersFormButton type="submit" onClick={save}>
                      保存
                    </ParametersFormButton>
                    <ParametersFormButton type="button" onClick={cloneForm}>
                      取消
                    </ParametersFormButton>
                  </ParametersFormButtonBox>
                </ParametersFormBottom>
              </ParametersForm>
            )}
          </OperateButton>
          <OperateButton
            icon={deleteIcon}
            onClick={deleteVideo}
            btnText="删除"
          />
        </VideoItemOperate>
      </VideoItemContentBox>
    </VideoItemBox>
  );
}

export default VideoItem;
