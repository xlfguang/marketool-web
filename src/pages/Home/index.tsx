import Main from "@/components/main";
import React, { useState } from "react";
import {
  CreateVideoBox,
  CreateVideoButton,
  CreateVideoInput,
  CreateVideoInputBox,
  MainLogo,
  UpLoadButton,
  VideoList,
} from "./style";
import logo from "@/assets/images/AiMarketool.png";
import titleIcon from "@/assets/images/T-icon.png";
import lickIcon from "@/assets/images/Link-icon.png";
import uploadIcon from "@/assets/images/Upload-icon.png";
import VideoItem from "./components/videoItem";
import AdvancedParameters from "./components/parameters";
function Index() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [videoList, setVideoList] = useState([
    {
      title: "测试标题长度与",
      link: "https://img.zcool.cn/community/012bb55ede4f33a801215aa04fd218.jpg",
    },
    {
      title: "测试标题长度与",
      link: "https://img.zcool.cn/community/012bb55ede4f33a801215aa04fd218.jpg",
    },
    {
      title: "测试标题长度与",
      link: "https://img.zcool.cn/community/012bb55ede4f33a801215aa04fd218.jpg",
    },
    {
      title: "测试标题长度与",
      link: "https://img.zcool.cn/community/012bb55ede4f33a801215aa04fd218.jpg",
    },
    {
      title: "测试标题长度与",
      link: "https://img.zcool.cn/community/012bb55ede4f33a801215aa04fd218.jpg",
    },
    {
      title: "测试标题长度与",
      link: "https://img.zcool.cn/community/012bb55ede4f33a801215aa04fd218.jpg",
    },
    {
      title: "测试标题长度测试标题长度测试标题长度测试标题长度测试标题长度",
      link: "https://img.zcool.cn/community/012bb55ede4f33a801215aa04fd218.jpg",
    },
    {
      title: "测试标题长度与",
      link: "https://img.zcool.cn/community/012bb55ede4f33a801215aa04fd218.jpg",
    },
    {
      title: "测试标题长度与",
      link: "https://img.zcool.cn/community/012bb55ede4f33a801215aa04fd218.jpg",
    },
  ]);
  const [parameters, setParameters] = useState({
    titleFontSize: "10",
    titleLineHeight: "10",
    titleY: "10",
    titleColor: "#000",
    titleBorderColor: "#000",
    subtitleFontSize: "10",
    subtitleLineHeight: "10",
    subtitleColor: "#000",
    subtitleBorderColor: "#000",
    subtitleBgColor: "#000",
  });
  return (
    <Main>
      <MainLogo src={logo} alt="logo" />
      <CreateVideoBox>
        <CreateVideoInputBox icon={titleIcon}>
          <CreateVideoInput
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </CreateVideoInputBox>
        <CreateVideoInputBox icon={lickIcon}>
          <CreateVideoInput
            placeholder="Drop a link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </CreateVideoInputBox>
        <UpLoadButton icon={uploadIcon}>Upload</UpLoadButton>
        <CreateVideoButton>Get clips in 1 click</CreateVideoButton>
        <AdvancedParameters
          parameters={parameters}
          setParameters={setParameters}
        />
      </CreateVideoBox>
      <VideoList>
        {videoList.map((item, index) => (
          <VideoItem key={index} videoInfo={item} />
        ))}
      </VideoList>
    </Main>
  );
}

export default Index;
