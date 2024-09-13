import React from "react";
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
  ParametersInputBox,
  ParametersInputTitle,
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
import downloadIcon from "@/assets/images/Download.png";
import synthesisIcon from "@/assets/images/synthesis.png";
import alterIcon from "@/assets/images/alter.png";
import deleteIcon from "@/assets/images/delete.png";
interface VideoItemProps {
  video: string;
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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) => {
  return (
    <ParametersInputBox>
      <ParametersInputTitle>{props.title}</ParametersInputTitle>
      {props.type === "input" ? (
        <MyInput
          type="text"
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
        />
      ) : (
        <MyTextArea
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
        />
      )}
    </ParametersInputBox>
  );
};
function VideoItem(props: VideoItemProps) {
  const [formShow, setFormShow] = React.useState(false);
  const [activeBtn, setActiveBtn] = React.useState("");
  const download = () => {};
  const synthesis = () => {};
  const alter = () => {
    setFormShow(true);
    setActiveBtn("alter");
  };
  const deleteVideo = () => {};
  return (
    <VideoItemBox>
      <Title>标题：超值福利来了！热销商品限时优惠等你来拿，惊喜不断</Title>
      <VideoItemContentBox>
        <VideoItemContent>
          <VideoItemImg src="https://img.zcool.cn/community/012bb55ede4f33a801215aa04fd218.jpg" />
          <VideoItemContentRight>
            <Introduce>
              <VideoItemDescription>
                描述：该片改编自亚利桑德罗·巴里克文学剧本《1900：独白》，讲述了一个被命名为“1900”的弃婴在一艘远洋客轮上与钢琴结缘，成为钢琴大师的传奇故事。
              </VideoItemDescription>
              <VideoItemCaption>
                标签：#牛奶直播#酒#自营产品#牛奶直播#酒#自营产品#牛奶直播#酒#自营产品#牛奶直播#酒#自营产品
              </VideoItemCaption>
            </Introduce>
            <Line />
            <Caption>
              字幕：00:00:00,000 -- 00:00:20,000 m 38 -1 l 44 6 l 38 13 l 19 13
              b 14 12 14 6 14 6 b 14 6 14 0 19 -1
            </Caption>
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
                  value=""
                  onChange={() => {}}
                />
                <ParametersInput
                  title="字幕"
                  type="textarea"
                  value=""
                  onChange={() => {}}
                />
                <ParametersInput
                  title="社交媒体描述"
                  type="input"
                  value=""
                  onChange={() => {}}
                />
                <ParametersInput
                  title="社交媒体标签"
                  type="input"
                  value=""
                  onChange={() => {}}
                />
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
